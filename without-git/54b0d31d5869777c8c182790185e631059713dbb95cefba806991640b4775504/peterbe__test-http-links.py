import json
import sys
from urllib.parse import urlparse
from collections import Counter

import requests


urls = set()
with open(sys.argv[1]) as f:
    for line in f:
        if (
            line.strip()
            and not line.startswith("http://localhost")
            and not line.startswith("http://127.0.0.1")
        ):
            urls.add(line.strip())

# by_domain = Counter()
# for url in urls:
#     by_domain[urlparse(url).netloc] += 1
# print("Most common domains")
# for domain, count in by_domain.most_common(20):
#     print(f"{domain:<40} {count}")


FN = "build/flaws/safe-to-https-domains.json"


def load():
    try:
        with open(FN) as f:
            return json.load(f)
    except FileNotFoundError:
        return {}


def save(state):
    with open(FN, "w") as f:
        return json.dump(state, f, indent=2)


def test_domain(url):
    assert url.startswith("http://"), url
    try:
        # r = requests.get(url, timeout=6, allow_redirects=False)
        r = requests.get(url, timeout=3)
    except (
        requests.exceptions.ConnectionError,
        requests.exceptions.TooManyRedirects,
        requests.exceptions.ReadTimeout,
        UnicodeError,
    ) as e:
        print(url, "???>", e.__class__.__name__)
        return
    # if r.status_code in (301, 302):
    #     print(url, "REDIRECTS TO", r.headers["location"])
    #     if r.headers["location"].startswith("https://"):
    #         return True
    # elif r.status_code in (200, 404, 403):
    if r.status_code in (200, 404):
        try:
            r2 = requests.get(url.replace("http://", "https://"), timeout=3)
            print(url, "~~>", r2.status_code)
            return r2.status_code < 500
        except requests.exceptions.SSLError as e:
            print(url, "-->", e.__class__.__name__)
            return False
        except (
            requests.exceptions.ConnectionError,
            requests.exceptions.TooManyRedirects,
            requests.exceptions.ReadTimeout,
            requests.exceptions.ContentDecodingError,
        ) as e:
            print(url, "---->", e.__class__.__name__)
            return None

    else:
        print(url, "==>", r.status_code)


state = load()
urls = list(urls)
import random

random.shuffle(urls)
import time

checked_domains = set()
for i, url in enumerate(urls):
    domain = urlparse(url).netloc
    if "lxr.mozilla.org" in domain or "mxr.mozilla.org" in domain:
        continue
    if domain in checked_domains:
        print("Skip", domain)
        continue
    # if domain not in state or state[domain] is None:
    if domain not in state:  # or state[domain] is None:
        print(f"{i:>4}/{len(urls)} ", end="")
        state[domain] = test_domain(url)
        if state[domain] is None:
            checked_domains.add(domain)
            with open("/tmp/checked.log", "a") as f:
                f.write(f"{domain}\n")
        save(state)
        time.sleep(0.1)

        if i >= 15000:
            print("STOP! Take a break")
            break

state = {k: v for k, v in state.items() if v is not None}
save(state)
print(len(state), "domains stored in the state")
