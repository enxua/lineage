export const DATA = {
  items: [
    // --- 무기 (Weapons - 119번) ---
    { id: 1, name: "단검", category: "무기/단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/1.png", stats: "4/4 | 전체 | 안전 6 | 무게 30", description: "관통 효과" },
    { id: 2, name: "은장검", category: "무기/단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/2.png", stats: "8/12 | 군,기,요 | 안전 6 | 무게 60", description: "언데드 추가타" },
    { id: 3, name: "수정 단검", category: "무기/단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/3.png", stats: "10/4 | 전체 | 안전 6 | 무게 40", description: "관통 효과" },
    { id: 4, name: "레이피어", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/4.png", stats: "11/6 | 군,기,요 | 안전 6 | 무게 60", description: "언데드 추가타" },
    { id: 5, name: "다마스커스 검", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/5.png", stats: "10/11 | 군,기,요 | 안전 6 | 무게 50", description: "비손상" },
    { id: 6, name: "싸울아비 장검", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/6.png", stats: "16/10 | 기사 | 안전 6 | 무게 50", description: "공격성공+4" },
    { id: 7, name: "뇌신검", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/7.png", stats: "13/12 | 군,기,요 | 안전 6 | 무게 40", description: "번개 마법" },
    { id: 8, name: "데스나이트의 불검", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/8.png", stats: "18/10 | 기사 | 안전 6 | 무게 50", description: "헬파이어" },
    { id: 9, name: "양손검", category: "무기/양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/10.png", stats: "12/15 | 기사 | 안전 6 | 무게 100", description: "기본 양손검" },
    { id: 10, name: "무관의 양손검", category: "무기/양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/11.png", stats: "19/23 | 기사 | 안전 6 | 무게 100", description: "HP회복+10" },
    { id: 11, name: "화염의 활", category: "무기/활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/24.png", stats: "3/2 | 요정 | 안전 6 | 무게 30", description: "추가타격+4" },
    { id: 12, name: "사이하의 활", category: "무기/활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/25.png", stats: "4/4 | 요정 | 안전 6 | 무게 30", description: "무형 화살" },
    { id: 13, name: "마나의 지팡이", category: "무기/지팡이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/35.png", stats: "3/3 | 법사 | 안전 0 | 무게 25", description: "MP 흡수" },

    // --- 방어구 (Armor - 121, 122번) ---
    { id: 101, name: "마법 방어 투구", category: "방어구/투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/103.png", stats: "AC-2 | 전체 | 안전 4 | 무게 50", description: "MR+4" },
    { id: 102, name: "엘프족 투구", category: "방어구/투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/111.png", stats: "AC-2 | 요정 | 안전 6 | 무게 20", description: "가성비" },
    { id: 103, name: "무관의 투구", category: "방어구/투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/114.png", stats: "AC-2 | 기사 | 안전 4 | 무게 30", description: "HP회복+1" },
    { id: 104, name: "판금 갑옷", category: "방어구/갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/134.png", stats: "AC-8 | 기사 | 안전 4 | 무게 450", description: "기본" },
    { id: 105, name: "요정족 판금 갑옷", category: "방어구/갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/142.png", stats: "AC-6 | 요정 | 안전 6 | 무게 250", description: "요정 전용" },
    { id: 106, name: "수정 갑옷", category: "방어구/갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/144.png", stats: "AC-8 | 군,기 | 안전 4 | 무게 350", description: "단단함" },
    { id: 107, name: "마법 망토", category: "방어구/망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/164.png", stats: "AC-2 | 전체 | 안전 4 | 무게 10", description: "MR+10" },
    { id: 108, name: "파워 글로브", category: "방어구/장갑", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/182.png", stats: "AC-1 | 전체 | 안전 4 | 무게 40", description: "STR+2" },
    { id: 109, name: "활골무", category: "방어구/장갑", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/183.png", stats: "AC-1 | 요정 | 안전 4 | 무게 10", description: "명중+2" },
    { id: 110, name: "강철 부츠", category: "방어구/부츠", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/194.png", stats: "AC-3 | 전체 | 안전 4 | 무게 50", description: "기본 부츠" },

    // --- 장신구 (Accessories - 123번) ---
    { id: 201, name: "해골 목걸이", category: "장신구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/221.png", stats: "AC-2 | 전체 | 무게 5", description: "방어력" },
    { id: 202, name: "항마의 반지", category: "장신구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/241.png", stats: "MR+5 | 전체 | 무게 5", description: "마법방어" },

    // --- 마법 (Spells - 111~114번) ---
    { id: 501, name: "힐", category: "마법", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/1.png", stats: "MP 4 | 전체", description: "회복" },
    { id: 502, name: "실드", category: "마법", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/4.png", stats: "MP 8 | 전체", description: "AC 강화" },
    { id: 503, name: "트리플 애로우", category: "마법", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/124.png", stats: "MP 15 | 요정", description: "공격" },

    // --- 몬스터 (Monsters - 116번) ---
    { id: 901, name: "데스나이트", category: "보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/104.png", stats: "Lv 52 | 불", description: "본던 7층" },
    { id: 902, name: "바포메트", category: "보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/122.png", stats: "Lv 45 | 바람", description: "말섬 던전" }
  ],
  spells: [], // items 배열에서 category로 필터링하여 보여주도록 설계 변경 (데이터 통합 관리)
  monsters: []
};