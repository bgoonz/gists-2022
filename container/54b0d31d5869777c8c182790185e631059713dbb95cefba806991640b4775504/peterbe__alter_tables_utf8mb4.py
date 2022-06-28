import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "kuma.settings.local")

application = get_wsgi_application()

from urllib.parse import urlparse
from django.db import connection
from django.conf import settings
from kuma.users.models import User
from django.db import connections, utils, transaction


PREFERED_COLLATIONS = (
    "utf8mb4_unicode_520_ci",
    "utf8mb4_unicode_520_ci",
    "utf8mb4_general_ci",
    "utf8mb4_unicode_ci",
)

try:
    os.remove("all_alter_tables.sql")
except FileNotFoundError:
    pass


def log_sql(sql):
    with open("all_alter_tables.sql", "a") as f:
        sql = sql.strip()
        if not sql.endswith(";"):
            sql += ";"
        f.write(sql)
        f.write("\n\n")


def get_utf8mb_collations(connection):
    with connection.cursor() as cursor:
        cursor.execute("SHOW COLLATION WHERE Charset='utf8mb4';")
        return frozenset([row[0] for row in cursor.fetchall()])


def get_preferred_collations(connection):
    valid_collations = get_utf8mb_collations(connection)
    return [
        collation for collation in PREFERED_COLLATIONS if collation in valid_collations
    ]


def db_colation_migration(connection, cursor=None):
    if connection.vendor != "mysql":
        return
    collation = get_preferred_collations(connection)[0]
    db_name = connection.get_connection_params()["db"]
    sql = "ALTER DATABASE %s CHARACTER SET utf8mb4 COLLATE %s;" % (db_name, collation)
    if cursor:
        cursor.execute(sql)
        log_sql(sql)
    else:
        with connection.cursor() as cursor:
            cursor.execute(sql)


def table_colation_migration(table_name, connection, cursor=None):
    if connection.vendor != "mysql":
        return
    collation = get_preferred_collations(connection)[0]

    column_names = {
        "account_emailaddress": [("email", "varchar(191)")],
        "search_filter": [("name", "varchar(191)"), ("slug", "varchar(191)")],
        "search_filtergroup": [("name", "varchar(191)"), ("slug", "varchar(191)")],
        "wiki_revision": [("title", "varchar(191)"), ("slug", "varchar(191)")],
        "wiki_document": [("title", "varchar(191)"), ("slug", "varchar(191)")],
        "attachments_attachment": [("title", "varchar(191)")],
        "attachments_attachmentrevision": [
            ("title", "varchar(191)"),
            ("mime_type", "varchar(191)"),
        ],
        "wiki_documentdeletionlog": [("slug", "varchar(191)")],
        "feeder_entry": [("guid", "varchar(191)")],
    }
    for column_name, new_column_type in column_names.get(table_name, []):
        print("COLUMN_NAME:", column_name, "OF", table_name)
        sql = f"""
        ALTER TABLE {table_name}
        CHANGE {column_name} {column_name} {new_column_type}
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
        """
        cursor.execute(sql)
        log_sql(sql)

    sql = "ALTER TABLE %s CONVERT TO CHARACTER SET utf8mb4 COLLATE %s" % (
        table_name,
        collation,
    )
    # ALTER TABLE table_name CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    # ALTER TABLE table_name CHANGE column_name column_name VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    print("TABLE_NAME:", table_name)
    print(sql)
    try:
        if cursor:
            cursor.execute(sql)
            log_sql(sql)
            print("Worked!")
        else:
            with connection.cursor() as cursor:
                cursor.execute(sql)
    except utils.ProgrammingError as e:
        if e.args[0] == 1146:
            # Table doesn't exist. Ignore it.
            pass
        else:
            raise


with transaction.atomic():
    with connection.cursor() as cursor:
        db_colation_migration(connection, cursor=cursor)
        for name in connection.introspection.django_table_names():
            if name in ("tidings_watch", "search_filter", "constance_config"):
                # Don't care!
                continue
            table_colation_migration(name, connection, cursor=cursor)
