"""Download subsetted variable fonts (one woff2 per family) from Google Fonts into src/assets/fonts/.

Coverage = Basic Latin + Latin-1 + Latin Extended-A + common typographic punctuation + every non-ASCII
character found in the site's sources. Re-run after adding text with new symbols:

    python scripts/subset-fonts.py
"""
import pathlib, re, urllib.parse, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'src' / 'assets' / 'fonts'
FAMILIES = {
    'inter': 'Inter:wght@100..900',
    'space-grotesk': 'Space+Grotesk:wght@300..700',
    'jetbrains-mono': 'JetBrains+Mono:wght@100..800',
}
# A woff2-capable browser user agent, or Google serves TTF.
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'

chars = {chr(c) for c in range(0x20, 0x7F)} | {chr(c) for c in range(0xA0, 0x180)}
chars |= set('–—‘’‚“”„«»…•·×→←↑↓≈±€™✓′″‹›')
for path in list((ROOT / 'src').rglob('*.ts')) + list((ROOT / 'src').rglob('*.tsx')) + list((ROOT / 'src').rglob('*.md')):
    chars |= {ch for ch in path.read_text(encoding='utf-8') if ord(ch) > 0x7E and not (0xD800 <= ord(ch) <= 0xDFFF)}
# Emoji / symbols outside text fonts are left to the system.
text = ''.join(sorted(ch for ch in chars if ord(ch) < 0x2700 or ch in '✓'))

OUT.mkdir(parents=True, exist_ok=True)
for name, family in FAMILIES.items():
    url = f'https://fonts.googleapis.com/css2?family={family}&display=swap&text={urllib.parse.quote(text)}'
    css = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA})).read().decode()
    src = re.search(r'src:\s*url\(([^)]+)\)\s*format\([\'"]woff2[\'"]\)', css)
    if not src:
        raise SystemExit(f'No woff2 in response for {name}:\n{css[:400]}')
    data = urllib.request.urlopen(urllib.request.Request(src.group(1), headers={'User-Agent': UA})).read()
    (OUT / f'{name}.woff2').write_bytes(data)
    print(f'{name}.woff2  {len(data) // 1024} KB  ({len(text)} chars)')
