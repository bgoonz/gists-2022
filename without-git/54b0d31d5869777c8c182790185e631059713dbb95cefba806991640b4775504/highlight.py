import sys
import csv
from collections import Counter


csv_file, email = sys.argv[1:]


class color:
    PURPLE = "\033[95m"
    CYAN = "\033[96m"
    DARKCYAN = "\033[36m"
    BLUE = "\033[94m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    RED = "\033[91m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"
    END = "\033[0m"


with open(csv_file) as f:
    reader = csv.reader(f)
    headings = None
    for line in reader:
        if not headings:
            headings = line
            continue

        email_value = line[67]
        if email.lower() in email_value.lower():
            row = {x: line[i] for i, x in enumerate(headings)}
            print(color.BOLD + f"EMAIL: {email_value}" + color.END)
            print()

            counters = {}
            for key, value in row.items():
                if "We plan to follow up on this sur" in key:
                    continue
                if not value:
                    continue
                if ":" in key:
                    heading = key.split(":")[1]
                    if heading not in counters:
                        counters[heading] = Counter()
                    counters[heading][value] += 1

            for question in counters:
                print(color.BOLD + question + color.END)
                for answer in counters[question]:
                    print(f" - {answer}")
                print()
