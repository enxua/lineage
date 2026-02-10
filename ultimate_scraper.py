import re
import json
import os

def parse_inven_guide(filename, category):
    with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # 본문 영역만 추출
    main_match = re.search(r'id="powerboardContent".*?>(.*?)<!-- SNS SHARE -->', content, re.DOTALL)
    if not main_match:
        main_match = re.search(r'class="contentBody".*?>(.*?)<!-- / SNS SHARE -->', content, re.DOTALL)
    
    body = main_match.group(1) if main_match else content
    
    results = []
    # <tr> 태그를 찾아 하나씩 처리
    rows = re.findall(r'<tr.*?>(.*?)</tr>', body, re.DOTALL)
    
    for row in rows:
        tds = re.findall(r'<td.*?>(.*?)</td>', row, re.DOTALL)
        if len(tds) < 2: continue
        
        # 이미지 추출 (src 속성 전체)
        img_match = re.search(r'src="([^"]*static\.inven\.co\.kr[^"]*)"', tds[0])
        if not img_match:
            img_match = re.search(r'src="([^"]*file\.ncsoft\.com[^"]*)"', tds[0])
        
        img_url = img_match.group(1) if img_match else ""
        
        # 텍스트 추출 및 정제
        def clean(html_str):
            text = re.sub(r'<[^>]+>', ' ', html_str)
            return " ".join(text.split()).strip()
        
        name = clean(tds[1])
        if not name or name in ["아이콘", "이름", "항목", "이미지"]: continue
        
        # 모든 컬럼 데이터를 stats에 합침
        all_stats = [clean(td) for td in tds[2:]]
        
        results.append({
            "name": name,
            "category": category,
            "image": img_url,
            "stats": " | ".join(all_stats),
            "description": all_stats[-1] if all_stats else "",
            "location": ""
        })
    
    return results

data_map = [
    ("119_weapons.html", "무기"),
    ("121_armor1.html", "투구/갑옷/망토"),
    ("122_armor2.html", "장갑/부츠/방패"),
    ("123_acc.html", "장신구"),
    ("111_spell1.html", "마법(일반)"),
    ("112_spell2.html", "마법(정령)"),
    ("113_spell3.html", "마법(기술)"),
    ("114_spell4.html", "마법(군주)"),
    ("116_monsters.html", "몬스터")
]

final_db = {"items": [], "spells": [], "monsters": []}

for file, cat in data_map:
    extracted = parse_inven_guide(file, cat)
    print(f"File {file}: Extracted {len(extracted)} items")
    if "마법" in cat:
        final_db["spells"].extend(extracted)
    elif "몬스터" in cat:
        final_db["monsters"].extend(extracted)
    else:
        final_db["items"].extend(extracted)

# ID 부여
for key in final_db:
    for i, item in enumerate(final_db[key]):
        item["id"] = i + 1

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(final_db, f, ensure_ascii=False, indent=2)
