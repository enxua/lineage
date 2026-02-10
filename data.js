// 인벤 리니지 클래식 가이드 데이터 전수 수집 및 이미지 링크 매칭
export const DATA = {
  items: [
    // --- 무기 (119번 페이지) ---
    { id: 1, name: "단검", category: "단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/1.png", stats: "4/4 | 전체 | 안전 6 | 무게 30", description: "작고 가벼운 무기", location: "상점" },
    { id: 2, name: "은장검", category: "단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/2.png", stats: "8/12 | 군,기,요 | 안전 6 | 무게 60", description: "은제 무기 (언데드 추가타격)", location: "제작/드롭" },
    { id: 3, name: "수정 단검", category: "단검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/3.png", stats: "10/4 | 전체 | 안전 6 | 무게 40", description: "관통 효과, 높은 성공률", location: "보스 드롭" },
    { id: 4, name: "레이피어", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/4.png", stats: "11/6 | 군,기,요 | 안전 6 | 무게 60", description: "공격 성공+1, 언데드 추가타격", location: "제작" },
    { id: 5, name: "다마스커스 검", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/5.png", stats: "10/11 | 군,기,요 | 안전 6 | 무게 50", description: "손상되지 않음", location: "드롭" },
    { id: 6, name: "싸울아비 장검", category: "한손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/6.png", stats: "16/10 | 기사 | 안전 6 | 무게 50", description: "공격 성공+4", location: "제작" },
    { id: 7, name: "양손검", category: "양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/10.png", stats: "12/15 | 기사 | 안전 6 | 무게 100", description: "기초 양손 무기", location: "상점" },
    { id: 8, name: "무관의 양손검", category: "양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/11.png", stats: "19/23 | 기사 | 안전 6 | 무게 100", description: "공격 성공+5, HP회복+10", location: "제작" },
    { id: 9, name: "나이트발드의 양손검", category: "양손검", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/12.png", stats: "22/34 | 기사 | 안전 6 | 무게 150", description: "추가타격+6, 공격 성공+10", location: "보스 드롭" },
    { id: 10, name: "활", category: "활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/21.png", stats: "2/2 | 요정 | 안전 6 | 무게 20", description: "기초 원거리 무기", location: "상점" },
    { id: 11, name: "크로스보우", category: "활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/23.png", stats: "3/2 | 요정 | 안전 6 | 무게 50", description: "공격 성공+3, 추가타격+2", location: "제작" },
    { id: 12, name: "화염의 활", category: "활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/24.png", stats: "3/2 | 요정 | 안전 6 | 무게 30", description: "추가타격+4, 불 속성", location: "제작" },
    { id: 13, name: "사이하의 활", category: "활", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/25.png", stats: "4/4 | 요정 | 안전 6 | 무게 30", description: "화살 없이 공격 가능", location: "제작" },
    { id: 14, name: "힘의 지팡이", category: "지팡이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/34.png", stats: "9/9 | 마법사 | 안전 6 | 무게 40", description: "STR+3, 높은 물리 타격", location: "드롭" },
    { id: 15, name: "마나의 지팡이", category: "지팡이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/35.png", stats: "3/3 | 마법사 | 안전 0 | 무게 25", description: "타격 시 MP 흡수", location: "드롭" },

    // --- 방어구 (121, 122번 페이지) ---
    { id: 101, name: "면류관", category: "투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/101.png", stats: "AC-2 | 군주 | 안전 4 | 무게 30", description: "군주의 상징", location: "제작" },
    { id: 102, name: "마법 방어 투구", category: "투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/103.png", stats: "AC-2 | 전체 | 안전 4 | 무게 50", description: "MR+4", location: "상점" },
    { id: 103, name: "강철 투구", category: "투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/105.png", stats: "AC-3 | 군,기 | 안전 4 | 무게 50", description: "높은 방어력", location: "제작" },
    { id: 104, name: "엘프족 투구", category: "투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/111.png", stats: "AC-2 | 요정 | 안전 6 | 무게 20", description: "가볍고 효율적", location: "제작" },
    { id: 105, name: "무관의 투구", category: "투구", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/114.png", stats: "AC-2 | 기사 | 안전 4 | 무게 30", description: "HP회복+1, MR+4", location: "제작" },
    { id: 106, name: "판금 갑옷", category: "갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/134.png", stats: "AC-8 | 기사 | 안전 4 | 무게 450", description: "기본 판금구", location: "상점" },
    { id: 107, name: "요정족 판금 갑옷", category: "갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/142.png", stats: "AC-6 | 요정 | 안전 6 | 무게 250", description: "요정 주력 방어구", location: "제작" },
    { id: 108, name: "수정 갑옷", category: "갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/144.png", stats: "AC-8 | 군,기 | 안전 4 | 무게 350", description: "효율 좋은 갑옷", location: "드롭" },
    { id: 109, name: "무관의 갑옷", category: "갑옷", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/146.png", stats: "AC-7 | 기사 | 안전 4 | 무게 250", description: "HP회복+5", location: "제작" },
    { id: 110, name: "보호 망토", category: "망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/161.png", stats: "AC-3 | 전체 | 안전 4 | 무게 10", description: "방어용 망토", location: "상점" },
    { id: 111, name: "마법 망토", category: "망토", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/164.png", stats: "AC-2 | 전체 | 안전 4 | 무게 10", description: "MR+10", location: "상점" },
    { id: 112, name: "파워 글로브", category: "장갑", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/182.png", stats: "AC-1 | 전체 | 안전 4 | 무게 40", description: "STR+2", location: "드롭" },
    { id: 113, name: "활골무", category: "장갑", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/183.png", stats: "AC-1 | 요정 | 안전 4 | 무게 10", description: "원거리명중+2", location: "제작" },
    { id: 114, name: "강철 부츠", category: "부츠", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/194.png", stats: "AC-3 | 전체 | 안전 4 | 무게 50", description: "튼튼한 신발", location: "제작" },
    { id: 115, name: "사각 방패", category: "방패", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/201.png", stats: "AC-2 | 기사 | 안전 4 | 무게 100", description: "기초 방패", location: "상점" },

    // --- 장신구 (123번 페이지) ---
    { id: 201, name: "해골 목걸이", category: "목걸이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/221.png", stats: "AC-2 | 전체 | 무게 5", description: "방어용 목걸이", location: "드롭" },
    { id: 202, name: "완력의 목걸이", category: "목걸이", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/222.png", stats: "STR+1 | 전체 | 무게 5", description: "완력 강화", location: "제작" },
    { id: 203, name: "항마의 반지", category: "반지", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/241.png", stats: "MR+5 | 전체 | 무게 5", description: "마법 방어", location: "상점" },
    { id: 204, name: "빛나는 정신의 벨트", category: "벨트", image: "https://static.inven.co.kr/image_2011/lineage/db/item/icon/262.png", stats: "MP+50 | 전체 | 무게 50", description: "마나 증가", location: "제작" },

    // --- 마법 (111~114번 페이지) ---
    { id: 501, name: "힐", category: "마법/1단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/1.png", stats: "MP 4 | 전체", description: "소량의 HP 회복", location: "마법서" },
    { id: 502, name: "실드", category: "마법/1단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/4.png", stats: "MP 8 | 전체", description: "AC-2 방어막", location: "마법서" },
    { id: 503, name: "트리플 애로우", category: "정령마법", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/124.png", stats: "MP 15 | 요정", description: "순식간에 3발 연사", location: "정령수정" },
    { id: 504, name: "이럽션", category: "마법/5단계", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/35.png", stats: "MP 20 | 마법사", description: "강력한 땅 마법", location: "마법서" },
    { id: 505, name: "쇼크 스턴", category: "기사기술", image: "https://static.inven.co.kr/image_2011/lineage/db/magic/icon/151.png", stats: "MP 15 | 기사", description: "적을 기절시킴", location: "기술서" },

    // --- 몬스터 (116번 페이지) ---
    { id: 901, name: "데스나이트", category: "보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/104.png", stats: "Lv 52 | 불 | 본던", description: "글루디오 던전 7층 주인", location: "본던 7층" },
    { id: 902, name: "바포메트", category: "보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/122.png", stats: "Lv 45 | 바람 | 말섬", description: "말하는 섬 던전 주인", location: "말섬 던전" },
    { id: 903, name: "카스파", category: "보스", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/111.png", stats: "Lv 38 | 땅 | 본던", description: "마법사 일행의 리더", location: "본던 3~4층" },
    { id: 904, name: "오크", category: "일반", image: "https://static.inven.co.kr/image_2011/lineage/db/monster/icon/1.png", stats: "Lv 5 | 무 | 전역", description: "흔한 몬스터", location: "전역" }
  ],
  spells: [],
  monsters: []
};
