ALTER DATABASE developer_mozilla_org CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE users_usersubscription CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE auth_user_groups CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE attachments_trashedattachment CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE soapbox_message CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE authkeys_keyaction CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_documentdeletionlog
        CHANGE slug slug varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE wiki_documentdeletionlog CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE account_emailaddress
        CHANGE email email varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE account_emailaddress CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE authtoken_token CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE auth_group_permissions CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE taggit_taggeditem CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE attachments_attachmentrevision
        CHANGE title title varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE attachments_attachmentrevision
        CHANGE mime_type mime_type varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE attachments_attachmentrevision CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE tidings_watchfilter CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE socialaccount_socialtoken CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE attachments_attachment
        CHANGE title title varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE attachments_attachment CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE feeder_bundle_feeds CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE auth_permission CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_revisionakismetsubmission CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE django_session CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE django_content_type CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE search_index CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE waffle_flag_users CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_documenttag CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE waffle_sample CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE search_filtergroup
        CHANGE name name varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE search_filtergroup
        CHANGE slug slug varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE search_filtergroup CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE banners_banner CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_editortoolbar CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_localizationtag CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE core_ipban CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_localizationtaggedrevision CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE feeder_entry
        CHANGE guid guid varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE feeder_entry CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE auth_user_user_permissions CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE socialaccount_socialaccount CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE django_site CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_reviewtaggedrevision CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE search_outdatedobject CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_document
        CHANGE title title varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE wiki_document
        CHANGE slug slug varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE wiki_document CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE auth_group CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE socialaccount_socialapp CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_taggeddocument CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE feeder_bundle CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE feeder_feed CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_revisionip CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE socialaccount_socialapp_sites CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_reviewtag CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE waffle_flag CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE waffle_switch CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE users_userban CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_bcsignal CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE taggit_tag CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE waffle_flag_groups CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE account_emailconfirmation CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE authkeys_key CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE attachments_documentattachment CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_revision
        CHANGE title title varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE wiki_revision
        CHANGE slug slug varchar(191)
        CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE wiki_revision CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE django_admin_log CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE auth_user CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

ALTER TABLE wiki_documentspamattempt CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

