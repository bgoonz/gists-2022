from pathlib import Path

KEY = ""


def parse_hostname(fn):
    """read the hostname out of the given file name"""
    for line in fn.read_text().splitlines():
        if line.startswith(KEY):
            return line.removeprefix(KEY).strip()


def main():
    starting_folder = Path("./")

    # search for description.txt in all subfolders of the starting folder
    for fn in starting_folder.rglob("description.txt"):
        # if a hostname is found, rename the parent folder
        if (hostname := parse_hostname(fn)):
            fn.parent.rename(hostname)


if __name__ == '__main__':
    main()
