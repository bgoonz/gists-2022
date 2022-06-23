import sys
import requests

BASE = sys.argv[1]


def T(a, e):
    status_code = requests.get(BASE + a, allow_redirects=False).status_code
    print(
        a.ljust(30),
        "EXPECT",
        e,
        "GOT",
        status_code,
        "FAIL" if e != status_code else "YAY!",
    )


T("/payments", 301)
T("/payments/", 200)
T("/payments/XXX", 404)
T("/payments/terms", 301)
T("/payments/terms/", 200)
T("/payments/terms/xxxxx", 404)
T("/payments/thank-you", 301)
T("/payments/thank-you/", 200)
T("/payments/thank-you/xxxxx", 404)
