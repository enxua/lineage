export const DATA = {
  items: [
    // --- 무기 (Weapons) ---
    { id: 1, name: "단검", category: "단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/1.png", stats: "4/4 | 전체 | 안전 6 | 무게 30", description: "작고 가벼운 무기", location: "상점" },
    { id: 2, name: "은장검", category: "단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/2.png", stats: "8/12 | 군,기,요 | 안전 6 | 무게 60", description: "은제 무기 (언데드 추가타격)", location: "제작" },
    { id: 3, name: "수정 단검", category: "단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/3.png", stats: "10/4 | 전체 | 안전 6 | 무게 40", description: "관통 효과", location: "보스 드롭" },
    { id: 4, name: "레이피어", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/4.png", stats: "11/6 | 군,기,요 | 안전 6 | 무게 60", description: "공격 성공+1", location: "제작" },
    { id: 5, name: "다마스커스 검", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/5.png", stats: "10/11 | 군,기,요 | 안전 6 | 무게 50", description: "비손상", location: "드롭" },
    { id: 6, name: "싸울아비 장검", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/6.png", stats: "16/10 | 기사 | 안전 6 | 무게 50", description: "공격 성공+4", location: "제작" },
    { id: 7, name: "나이트발드의 양손검", category: "양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/12.png", stats: "22/34 | 기사 | 안전 6 | 무게 150", description: "추가타격+6", location: "드롭" },
    { id: 8, name: "화염의 활", category: "활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/24.png", stats: "3/2 | 요정 | 안전 6 | 무게 30", description: "추가타격+4", location: "제작" },
    { id: 9, name: "마나의 지팡이", category: "지팡이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/35.png", stats: "3/3 | 법사 | 안전 0 | 무게 25", description: "MP흡수", location: "드롭" },

    // --- 방어구 (Armor) ---
    { id: 101, name: "마법 방어 투구", category: "투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/103.png", stats: "AC-2 | 전체 | 안전 4 | 무게 50", description: "MR+4", location: "상점" },
    { id: 102, name: "요정족 판금 갑옷", category: "갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/142.png", stats: "AC-6 | 요정 | 안전 6 | 무게 250", description: "요정 주력 방어구", location: "제작" },
    { id: 103, name: "마법 망토", category: "망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/164.png", stats: "AC-2 | 전체 | 안전 4 | 무게 10", description: "MR+10", location: "상점" },
    { id: 104, name: "파워 글로브", category: "장갑", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/182.png", stats: "AC-1 | 전체 | 안전 4 | 무게 40", description: "STR+2", location: "드롭" },

    // --- 장신구 (Accessories) ---
    { id: 201, name: "해골 목걸이", category: "장신구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/221.png", stats: "AC-2 | 전체 | 무게 5", description: "방어구용 목걸이", location: "드롭" },
    { id: 202, name: "항마의 반지", category: "장신구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/241.png", stats: "MR+5 | 전체 | 무게 5", description: "마법 방어 반지", location: "상점" },

    // --- 마법 (Spells) ---
    { id: 501, name: "힐", category: "마법", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/1.png", stats: "MP 4 | 전체", description: "HP 회복", location: "마법서" },
    { id: 502, name: "실드", category: "마법", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/4.png", stats: "MP 8 | 전체", description: "AC-2", location: "마법서" },
    { id: 503, name: "트리플 애로우", category: "마법", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/124.png", stats: "MP 15 | 요정", description: "3연사", location: "정령수정" },

    // --- 몬스터 (Monsters) ---
    { id: 901, name: "데스나이트", category: "몬스터", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/104.png", stats: "Lv 52 | 불", description: "본던 보스", location: "본던 7층" },
    { id: 902, name: "바포메트", category: "몬스터", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/122.png", stats: "Lv 45 | 바람", description: "말섬 보스", location: "말섬 던전" }
  ],
  spells: [],
  monsters: []
};
// 실제 데이터 양을 수백개로 늘리기 위해 아래에 루프를 돌리거나 대량의 데이터를 수작업으로 더 추가하겠습니다.
// 여기서는 핵심 리스트 위주로 먼저 구성했습니다.
