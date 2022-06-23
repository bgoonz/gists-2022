import subprocess
from collections import defaultdict


def main():
    command = 'git log --name-only --no-decorate --format="COMMIT:%cI" --date-order'
    directory = "."
    subprocess_result = subprocess.run(
        command,
        cwd=directory,
        shell=True,
        check=True,
        text=True,
        stdout=subprocess.PIPE,
    )
    dates = []
    for line in subprocess_result.stdout.splitlines():
        # print(repr(line))
        if line.startswith("COMMIT:"):
            date = line.split("COMMIT:")[1].strip()
            dates.append(date)

            if date < "2021-01-01":
                break

    # print(dates)
    hour = defaultdict(int)
    hours = [int(x.split("T")[1].split(":")[0]) for x in dates]
    for h in hours:
        hour[h] += 1

    # print(hour)
    values = list(hour.values())
    max_value = max(values)
    for h in sorted(hour):
        value = hour[h]
        width = int(100 * value / max_value)
        print(f"{h:>02}:00 {'*' * width}")


main()
