import requests

files = ('GroupData.json', 'InterfaceData.json', 'SVGData.json', 'SpecData.json')

for file in files:
    download_url = f'https://github.com/mdn/yari/raw/main/kumascript/macros/{file}'
    downloaded = requests.get(download_url)
    downloaded.raise_for_status()
    content = downloaded.text

    with open(f'files/jsondata/{file}', 'w') as f:
        f.write(content)
