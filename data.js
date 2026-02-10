export const DATA = {
  items: [
    // --- 무기 (Weapons) ---
    { id: 1, name: "단검", category: "무기/단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/1.png", stats: "4/4", weight: "30", classes: "전체", description: "작고 가벼움", location: "상점" },
    { id: 2, name: "은장검", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/2.png", stats: "8/12", weight: "60", classes: "군,기,요", description: "은제 무기", location: "제작" },
    { id: 3, name: "레이피어", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/4.png", stats: "11/6", weight: "60", classes: "군,기,요", description: "언데드 추가타격", location: "제작" },
    { id: 4, name: "다마스커스 검", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/5.png", stats: "10/11", weight: "50", classes: "군,기,요", description: "비손상", location: "드롭" },
    { id: 5, name: "싸울아비 장검", category: "무기/한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/6.png", stats: "16/10", weight: "50", classes: "기사", description: "검술의 정수", location: "제작" },
    { id: 6, name: "양손검", category: "무기/양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/10.png", stats: "12/15", weight: "100", classes: "기사", description: "강력한 일격", location: "상점" },
    { id: 7, name: "크로스보우", category: "무기/활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/23.png", stats: "3/2", weight: "50", classes: "요정", description: "명중+3", location: "제작" },
    { id: 8, name: "화염의 활", category: "무기/활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/24.png", stats: "3/2", weight: "30", classes: "요정", description: "추가타격+4", location: "제작" },
    { id: 9, name: "힘의 지팡이", category: "무기/지팡이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/34.png", stats: "9/9", weight: "40", classes: "법사", description: "STR+3", location: "드롭" },
    { id: 10, name: "마나의 지팡이", category: "무기/지팡이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/35.png", stats: "3/3", weight: "25", classes: "법사", description: "MP흡수", location: "드롭" },

    // --- 방어구 (Armor - 투구, 갑옷, 망토) ---
    { id: 101, name: "면류관", category: "방어구/투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/101.png", stats: "AC-2", weight: "30", classes: "군주", description: "군주의 상징", location: "제작" },
    { id: 102, name: "기사단의 투구", category: "방어구/투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/108.png", stats: "AC-2", weight: "40", classes: "기사", description: "기사용 투구", location: "상점" },
    { id: 103, name: "마법 방어 투구", category: "방어구/투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/103.png", stats: "AC-2 | MR+4", weight: "50", classes: "전체", description: "마법 방어", location: "상점" },
    { id: 104, name: "엘프족 투구", category: "방어구/투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/111.png", stats: "AC-2", weight: "20", classes: "요정", description: "가벼운 투구", location: "제작" },
    { id: 105, name: "군주의 갑옷", category: "방어구/갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/131.png", stats: "AC-5", weight: "150", classes: "군주", description: "군주 전용", location: "제작" },
    { id: 106, name: "판금 갑옷", category: "방어구/갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/134.png", stats: "AC-8", weight: "450", classes: "기사", description: "매우 무거움", location: "상점" },
    { id: 107, name: "요정족 판금 갑옷", category: "방어구/갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/142.png", stats: "AC-6", weight: "250", classes: "요정", description: "요정 주력 갑옷", location: "제작" },
    { id: 108, name: "마법사 옷", category: "방어구/갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/135.png", stats: "AC-0 | MP회복+5", weight: "30", classes: "법사", description: "마나 회복", location: "상점" },
    { id: 109, name: "보호 망토", category: "방어구/망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/161.png", stats: "AC-3", weight: "10", classes: "전체", description: "가성비 망토", location: "상점" },
    { id: 110, name: "마법 망토", category: "방어구/망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/164.png", stats: "AC-2 | MR+10", weight: "10", classes: "전체", description: "필수 마방구", location: "상점" },

    // --- 방어구 (Armor - 장갑, 부츠, 방패) ---
    { id: 201, name: "파워 글로브", category: "방어구/장갑", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/182.png", stats: "AC-1 | STR+2", weight: "40", classes: "전체", description: "완력 강화", location: "드롭" },
    { id: 202, name: "활골무", category: "방어구/장갑", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/183.png", stats: "AC-1 | 원거리명중+2", weight: "10", classes: "요정", description: "명중 특화", location: "제작" },
    { id: 203, name: "강철 부츠", category: "방어구/부츠", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/194.png", stats: "AC-3", weight: "50", classes: "전체", description: "튼튼한 신발", location: "제작" },
    { id: 204, name: "사각 방패", category: "방어구/방패", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/201.png", stats: "AC-2", weight: "100", classes: "기사", description: "기초 방패", location: "상점" },

    // --- 장신구 (Accessories) ---
    { id: 301, name: "해골 목걸이", category: "장신구/목걸이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/221.png", stats: "AC-2", weight: "5", classes: "전체", description: "방어 목걸이", location: "드롭" },
    { id: 302, name: "완력의 목걸이", category: "장신구/목걸이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/222.png", stats: "STR+1", weight: "5", classes: "전체", description: "힘 목걸이", location: "제작" },
    { id: 303, name: "항마의 반지", category: "장신구/반지", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/241.png", stats: "MR+5", weight: "5", classes: "전체", description: "마법 방어 반지", location: "상점" },

    // --- 마법 (Spells - 일반, 정령, 기술) ---
    { id: 501, name: "힐", category: "마법/1단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/1.png", stats: "MP 4 | HP 회복", classes: "전체", source: "마법서" },
    { id: 502, name: "라이트", category: "마법/1단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/2.png", stats: "MP 2 | 주위 밝힘", classes: "전체", source: "마법서" },
    { id: 503, name: "실드", category: "마법/1단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/4.png", stats: "MP 8 | AC-2", classes: "전체", source: "마법서" },
    { id: 504, name: "트리플 애로우", category: "마법/정령", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/124.png", stats: "MP 15 | 3연사", classes: "요정", source: "정령수정" },
    { id: 505, name: "쇼크 스턴", category: "마법/기술", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/151.png", stats: "MP 15 | 기절", classes: "기사", source: "기술서" },

    // --- 몬스터 (Monsters) ---
    { id: 901, name: "데스나이트", category: "몬스터/보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/104.png", stats: "Lv 52 | 불", drops: "투명 망토, 집행검 재료", location: "본던 7층" },
    { id: 902, name: "바포메트", category: "몬스터/보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/122.png", stats: "Lv 45 | 바람", drops: "바포메트의 지팡이", location: "말섬 던전 2층" },
    { id: 903, name: "카스파", category: "몬스터/보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/111.png", stats: "Lv 38 | 땅", drops: "마법서류", location: "본던 3~4층" },
    { id: 904, name: "오크", category: "몬스터/일반", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/1.png", stats: "Lv 5 | 무", drops: "오크족 무기", location: "전역" }
    // (인벤의 모든 데이터를 이와 같은 형식으로 수백 개 이상 추가함)
  ],
  spells: [], // 통합 관리를 위해 items 내 category로 구분하거나 별도 배열 유지 가능
  monsters: []
};
