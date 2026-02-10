import urllib.request
import re
import json
import time

def get_html(url):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response:
        content = response.read()
        # 인코딩 시도
        for enc in ['utf-8', 'euc-kr', 'cp949']:
            try:
                return content.decode(enc)
            except:
                continue
        return content.decode('utf-8', errors='ignore')

def parse_inven_content(url, category_prefix):
    print(f"Parsing {url}...")
    html = get_html(url)
    
    # 본문 영역 추출
    body_match = re.search(r'<(div|td) [^>]*class="[^"]*(contentBody|articleContent|powerboardContent)[^"]*"[^>]*>(.*?)</\1>', html, re.DOTALL)
    if not body_match:
        # 더 넓은 범위로 시도
        body_match = re.search(r'<!-- SNS SHARE -->.*?<div[^>]*>(.*?)</div>.*?<!-- / SNS SHARE -->', html, re.DOTALL)
    
    content = body_match.group(1) if body_match else html
    
    items = []
    
    # 1. 테이블 형태 파싱
    tr_matches = re.findall(r'<tr[^>]*>(.*?)</tr>', content, re.DOTALL)
    for tr in tr_matches:
        tds = re.findall(r'<td[^>]*>(.*?)</td>', tr, re.DOTALL)
        if len(tds) >= 2:
            img_match = re.search(r'src="([^"]*(static\.inven\.co\.kr|file\.ncsoft\.com)[^"]*)"', tds[0])
            if not img_match: continue
            
            img_url = img_match.group(1)
            def clean(text):
                return re.sub(r'<[^>]+>', '', text).strip()
            
            name = clean(tds[1])
            if not name or name in ["아이콘", "이름", "항목"]: continue
            
            stats = " | ".join([clean(td) for td in tds[2:] if clean(td)])
            items.append({
                "name": name,
                "image": img_url,
                "category": category_prefix,
                "stats": stats
            })

    # 2. 만약 테이블로 안 잡히면 이미지 + 텍스트 패턴으로 시도
    if not items:
        pattern = re.compile(r'<img [^>]*src="([^"]*(static\.inven\.co\.kr|file\.ncsoft\.com)[^"]*)"[^>]*>.*?<b>(.*?)</b>(.*?)(?=<img|<div|</td>|</tr>|$)', re.DOTALL | re.IGNORECASE)
        matches = pattern.findall(content)
        for img_url, _, name, desc in matches:
            name = re.sub(r'<[^>]+>', '', name).strip()
            if not name: continue
            items.append({
                "name": name,
                "image": img_url,
                "category": category_prefix,
                "stats": re.sub(r'<[^>]+>', '', desc).strip()
            })
            
    return items

urls = {
    "items": [
        "https://www.inven.co.kr/board/lineageclassic/6485/119",
        "https://www.inven.co.kr/board/lineageclassic/6485/121",
        "https://www.inven.co.kr/board/lineageclassic/6485/122",
        "https://www.inven.co.kr/board/lineageclassic/6485/123"
    ],
    "spells": [
        "https://www.inven.co.kr/board/lineageclassic/6485/111",
        "https://www.inven.co.kr/board/lineageclassic/6485/112",
        "https://www.inven.co.kr/board/lineageclassic/6485/113",
        "https://www.inven.co.kr/board/lineageclassic/6485/114"
    ],
    "monsters": [
        "https://www.inven.co.kr/board/lineageclassic/6485/116"
    ]
}

all_data = {"items": [], "spells": [], "monsters": []}

for cat, url_list in urls.items():
    for url in url_list:
        try:
            results = parse_inven_content(url, cat)
            print(f"  Found {len(results)} items")
            all_data[cat].extend(results)
            time.sleep(0.5)
        except Exception as e:
            print(f"Error parsing {url}: {e}")

# 중복 제거 및 ID 부여
for cat in all_data:
    seen = set()
    unique_items = []
    for item in all_data[cat]:
        if item["name"] not in seen:
            seen.add(item["name"])
            item["id"] = len(unique_items) + 1
            unique_items.append(item)
    all_data[cat] = unique_items

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(all_data, f, ensure_ascii=False, indent=2)

print(f"Final Count: {len(all_data['items'])} items, {len(all_data['spells'])} spells, {len(all_data['monsters'])} monsters.")