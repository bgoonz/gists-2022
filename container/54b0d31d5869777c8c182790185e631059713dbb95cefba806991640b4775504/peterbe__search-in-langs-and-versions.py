import time
from urllib.parse import urlencode
import requests


langs = ("en", "cn", "es", "ja", "pt")
versions = ("dotcom", "ghec", "3.3", "3.4", "3.2", "3.1", "3.0", "ghae")


for lang in langs:
    for version in versions:
        url = "http://localhost:4000/search?" + urlencode(
            {"language": lang, "version": version, "query": "github"}
        )
        r = requests.get(url)
        r.raise_for_status()
        time.sleep(1)
