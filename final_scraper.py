import re
import json
import os

def parse_html_file(filename, category):
    with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    # 인벤 표 구조 파싱: 아이콘, 이름, 타격치(또는 AC), 클래스, 안전강화, 무게 순서가 일반적임
    # <img src="URL"></td><td>이름</td><td>능력치</td>...
    items = []
    # <img> 태그를 기점으로 한 줄씩 파싱
    pattern = re.compile(r'<img src="(https://static\.inven\.co\.kr/image_2011/lineage/db/.*?/icon/(\d+)\.png)".*?</td>(.*?)</tr>', re.DOTALL)
    matches = pattern.findall(html)
    
    for img_url, icon_id, row_content in matches:
        # 각 td 태그 안의 텍스트 추출
        tds = re.findall(r'<td.*?>(.*?)</td>', row_content, re.DOTALL)
        def clean(text):
            return re.sub(r'<[^>]+>', '', text).strip()
        
        if not tds: continue
        
        name = clean(tds[0])
        if not name or "아이콘" in name or "이름" in name: continue
        
        stats_list = [clean(td) for td in tds[1:]]
        
        items.append({
            "id": int(icon_id),
            "name": name,
            "category": category,
            "image": img_url,
            "stats": " | ".join(stats_list),
            "description": stats_list[-1] if stats_list else ""
        })
    return items

# 모든 URL을 curl로 다운로드 (사용자 제공 URL 전수)
urls = [
    ("119", "items/weapon"), ("121", "items/armor"), ("122", "items/armor"), 
    ("123", "items/accessory"), ("111", "spells"), ("112", "spells"), 
    ("113", "spells"), ("114", "spells"), ("116", "monsters")
]

all_data = {"items": [], "spells": [], "monsters": []}

for page_id, cat in urls:
    os.system(f'curl -s -L -A "Mozilla/5.0" https://www.inven.co.kr/board/lineageclassic/6485/{page_id} > temp.html')
    results = parse_html_file('temp.html', cat)
    if "items" in cat:
        all_data["items"].extend(results)
    elif cat == "spells":
        all_data["spells"].extend(results)
    else:
        all_data["monsters"].extend(results)

print(f"Total extracted: {len(all_data['items'])} items, {len(all_data['spells'])} spells, {len(all_data['monsters'])} monsters")

with open("final_data.json", "w", encoding="utf-8") as f:
    json.dump(all_data, f, ensure_ascii=False, indent=2)
