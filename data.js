export const DATA = {
  items: [
    // --- [무기 - 단검] ---
    { id: 1, name: "단검", category: "단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/1.png", stats: "4/4 | 추가타+0 | 성공+0", weight: "30", classes: "전체", description: "작고 가벼운 무기", location: "상점" },
    { id: 2, name: "은장검", category: "단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/2.png", stats: "8/12 | 성공+2", weight: "60", classes: "군/기/요", description: "은제 무기", location: "상점" },
    { id: 3, name: "수정 단검", category: "단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/3.png", stats: "10/4 | 성공+2", weight: "40", classes: "전체", description: "강력한 단검", location: "드롭" },
    // --- [무기 - 한손검] ---
    { id: 11, name: "레이피어", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/4.png", stats: "11/6 | 성공+1", weight: "60", classes: "군/기/요", description: "언데드 추가타", location: "제작" },
    { id: 12, name: "다마스커스 검", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/5.png", stats: "10/11 | 성공+1", weight: "50", classes: "군/기/요", description: "비손상", location: "드롭" },
    { id: 13, name: "싸울아비 장검", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/6.png", stats: "16/10 | 성공+4", weight: "50", classes: "기사", description: "최고의 한손검", location: "제작" },
    { id: 14, name: "뇌신검", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/7.png", stats: "13/12 | 성공+1", weight: "40", classes: "군/기/요", description: "번개 마법 발동", location: "드롭" },
    // --- [무기 - 양손검] ---
    { id: 21, name: "양손검", category: "양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/10.png", stats: "12/15", weight: "100", classes: "기사", description: "무거운 검", location: "상점" },
    { id: 22, name: "무관의 양손검", category: "양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/11.png", stats: "19/23 | 성공+5", weight: "100", classes: "기사", description: "무관 세트", location: "제작" },
    { id: 23, name: "나이트발드의 양손검", category: "양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/12.png", stats: "22/34 | 추가타+6", weight: "150", classes: "기사", description: "전설적인 양손검", location: "보스 드롭" },
    // --- [무기 - 활/석궁] ---
    { id: 31, name: "활", category: "활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/21.png", stats: "2/2", weight: "20", classes: "요정", description: "기초적인 활", location: "상점" },
    { id: 32, name: "크로스보우", category: "활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/23.png", stats: "3/2 | 성공+3", weight: "50", classes: "요정", description: "정교한 석궁", location: "제작" },
    { id: 33, name: "화염의 활", category: "활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/24.png", stats: "3/2 | 추가타+4", weight: "30", classes: "요정", description: "강력한 화력", location: "제작" },
    { id: 34, name: "사이하의 활", category: "활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/25.png", stats: "4/4 | 화살 무제한", weight: "30", classes: "요정", description: "전설의 활", location: "제작" },
    // --- [무기 - 지팡이] ---
    { id: 41, name: "힘의 지팡이", category: "지팡이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/34.png", stats: "9/9 | STR+3", weight: "40", classes: "법사", description: "완력 지팡이", location: "드롭" },
    { id: 42, name: "마나의 지팡이", category: "지팡이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/35.png", stats: "3/3 | MP흡수", weight: "25", classes: "법사", description: "마나 수급", location: "드롭" },

    // --- [방어구 - 투구] (121번 페이지 참조) ---
    { id: 101, name: "마법 방어 투구", category: "투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/103.png", stats: "AC-2 | MR+4", weight: "50", classes: "전체", description: "마방의 핵심", location: "상점" },
    { id: 102, name: "엘프족 투구", category: "투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/111.png", stats: "AC-2", weight: "20", classes: "요정", description: "가벼운 투구", location: "제작" },
    { id: 103, name: "무관의 투구", category: "투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/114.png", stats: "AC-2 | HP회복+1", weight: "30", classes: "기사", description: "무관 세트", location: "제작" },
    // --- [방어구 - 갑옷] ---
    { id: 121, name: "판금 갑옷", category: "갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/134.png", stats: "AC-8", weight: "450", classes: "기사", description: "기초 갑옷", location: "상점" },
    { id: 122, name: "요정족 판금 갑옷", category: "갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/142.png", stats: "AC-6", weight: "250", classes: "요정", description: "요정 필수템", location: "제작" },
    { id: 123, name: "수정 갑옷", category: "갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/144.png", stats: "AC-8", weight: "350", classes: "기/군", description: "단단한 갑옷", location: "드롭" },
    // --- [방어구 - 망토] (122번 페이지 참조) ---
    { id: 141, name: "보호 망토", category: "망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/161.png", stats: "AC-3", weight: "10", classes: "전체", description: "방어용 망토", location: "상점" },
    { id: 142, name: "마법 망토", category: "망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/164.png", stats: "AC-2 | MR+10", weight: "10", classes: "전체", description: "마방용 망토", location: "상점" },
    { id: 143, name: "은색의 망토", category: "망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/165.png", stats: "AC-2 | MR+15", weight: "10", classes: "전체", description: "상급 마방구", location: "드롭" },

    // --- [장신구 - 반지/목걸이] (123번 페이지 참조) ---
    { id: 201, name: "해골 목걸이", category: "장신구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/221.png", stats: "AC-2", weight: "5", classes: "전체", description: "기초 장신구", location: "드롭" },
    { id: 202, name: "완력의 목걸이", category: "장신구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/222.png", stats: "STR+1", weight: "5", classes: "전체", description: "힘 증가", location: "제작" },
    { id: 203, name: "항마의 반지", category: "장신구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/241.png", stats: "MR+5", weight: "5", classes: "전체", description: "마방 반지", location: "상점" },

    // --- [마법 - 일반/정령] (111~114번 페이지 참조) ---
    { id: 501, name: "힐", category: "마법/1단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/1.png", stats: "MP 4 | HP 회복", weight: "-", classes: "전체", description: "기초 회복", location: "마법서" },
    { id: 502, name: "실드", category: "마법/1단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/4.png", stats: "MP 8 | AC-2", weight: "-", classes: "전체", description: "방어 마법", location: "마법서" },
    { id: 503, name: "트리플 애로우", category: "마법/정령", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/124.png", stats: "MP 15 | 3연사", weight: "-", classes: "요정", description: "요정 공격 핵심", location: "정령수정" },
    { id: 504, name: "이럽션", category: "마법/5단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/35.png", stats: "MP 20 | 땅 피해", weight: "-", classes: "법사", description: "강력한 공격", location: "마법서" },
    { id: 505, name: "쇼크 스턴", category: "마법/기술", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/151.png", stats: "MP 15 | 기절", weight: "-", classes: "기사", description: "기사 핵심 기술", location: "기술서" },

    // --- [몬스터 - 보스/일반] (116번 페이지 참조) ---
    { id: 901, name: "데스나이트", category: "몬스터", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/104.png", stats: "Lv 52 | 불", weight: "-", classes: "-", description: "본던 보스", location: "본던 7층" },
    { id: 902, name: "바포메트", category: "몬스터", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/122.png", stats: "Lv 45 | 바람", weight: "-", classes: "-", description: "말섬 보스", location: "말섬 던전" },
    { id: 903, name: "카스파", category: "몬스터", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/111.png", stats: "Lv 38 | 땅", weight: "-", classes: "-", description: "마법사 보스", location: "본던 3~4층" },
    { id: 904, name: "오크", category: "몬스터", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/1.png", stats: "Lv 5 | 무", weight: "-", classes: "-", description: "일반 몬스터", location: "전역" }
  ],
  spells: [],
  monsters: []
};