// 인벤 리니지 클래식 데이터 기반 통합 DB
export const DATA = {
  items: [
    // --- 무기 (Weapons) ---
    { id: 1, name: "단검", category: "무기/단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/1.png", stats: "타격치 4/4 | 추가타격+0 | 성공+0", weight: "30", classes: "전체", description: "작고 가벼운 단검입니다.", location: "상점 판매" },
    { id: 2, name: "레이피어", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/4.png", stats: "타격치 11/6 | 성공+1", weight: "60", classes: "군주, 기사, 요정", description: "언데드 추가 타격 효과가 있습니다.", location: "기란 제작" },
    { id: 3, name: "싸울아비 장검", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/6.png", stats: "타격치 16/10 | 성공+4", weight: "50", classes: "기사", description: "기사 최고의 검 중 하나입니다.", location: "기란 제작" },
    { id: 4, name: "화염의 활", category: "무기/활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/24.png", stats: "타격치 3/2 | 추가타격+4 | 성공+2", weight: "30", classes: "요정", description: "강력한 화력을 자랑하는 활입니다.", location: "제작" },
    { id: 5, name: "마나의 지팡이", category: "무기/지팡이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/35.png", stats: "타격치 3/3 | MP 흡수", weight: "25", classes: "마법사", description: "타격 시 상대의 MP를 흡수합니다.", location: "드롭" },
    
    // --- 방어구 (Armor) ---
    { id: 101, name: "무관의 투구", category: "방어구/투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/114.png", stats: "AC -2 | HP회복+1 | MR+4", weight: "30", classes: "기사", description: "무관 세트의 투구입니다.", location: "제작" },
    { id: 102, name: "요정족 판금 갑옷", category: "방어구/갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/142.png", stats: "AC -6", weight: "250", classes: "요정", description: "요정 전용의 가벼운 판금 갑옷입니다.", location: "기란 제작" },
    { id: 103, name: "마법 망토", category: "방어구/망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/164.png", stats: "AC -2 | MR+10", weight: "10", classes: "전체", description: "마법 방어력을 높여주는 망토입니다.", location: "상점 판매" },
    { id: 104, name: "파워 글로브", category: "방어구/장갑", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/182.png", stats: "AC -1 | STR+2", weight: "40", classes: "전체", description: "완력을 강화해주는 장갑입니다.", location: "오우거 드롭" },
    { id: 105, name: "강철 부츠", category: "방어구/부츠", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/194.png", stats: "AC -3", weight: "50", classes: "전체", description: "방어력이 높은 강철 신발입니다.", location: "제작" }
  ],
  spells: [
    // --- 마법사 (Mage) ---
    { id: 501, name: "힐", category: "마법사/1단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/1.png", stats: "MP 4 | HP 소량 회복", description: "체력을 회복합니다. 언데드에게는 피해.", classes: "전체", source: "마법서 (힐)" },
    { id: 502, name: "실드", category: "마법사/1단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/4.png", stats: "MP 8 | AC -2", description: "방어막을 형성합니다.", classes: "전체", source: "마법서 (실드)" },
    { id: 503, name: "파이어 볼", category: "마법사/4단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/28.png", stats: "MP 20 | 범위 피해", description: "화염구를 던져 범위 피해를 입힙니다.", classes: "마법사", source: "마법서 (파이어 볼)" },
    
    // --- 요정 (Elf) ---
    { id: 601, name: "트리플 애로우", category: "요정/정령", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/124.png", stats: "MP 15 | 화살 3연사", description: "순식간에 화살 3발을 발사합니다.", classes: "요정", source: "정령의 수정 (트리플 애로우)" },
    { id: 602, name: "블러드 투 소울", category: "요정/정령", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/135.png", stats: "HP 소모 | MP 회복", description: "자신의 HP를 MP로 전환합니다.", classes: "요정", source: "정령의 수정 (블러드 투 소울)" }
  ],
  monsters: [
    { id: 901, name: "데스나이트", category: "보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/104.png", stats: "Lv 52 | 불 속성 | 본던 7층", drops: "투명 망토, 데스나이트의 투구, 마법서(디스인테그레이트)", location: "글루디오 던전 7층" },
    { id: 902, name: "바포메트", category: "보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/122.png", stats: "Lv 45 | 바람 속성 | 말섬 던전", drops: "바포메트의 지팡이, 마법 망토", location: "말하는 섬 던전 2층" },
    { id: 903, name: "오크", category: "일반", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/1.png", stats: "Lv 5 | 무 속성", drops: "오크족 검, 아데나", location: "전역" }
  ]
};
