export const DATA = {
  items: [
    { id: 1, name: "집행자의 검", category: "양손검", image: "https://lh3.googleusercontent.com/d/1eW6x7H8GzO9-x6E5-n8z9X_yE2_P_O_Z", stats: "타격치 34/40 | 추가타격+28 | 공격성공+13", description: "침묵의 동굴 제작", location: "라스타바드" },
    { id: 2, name: "데스나이트의 투구", category: "투구", image: "https://lh3.googleusercontent.com/d/1E_Vv-F0Xk3-Y6G7H8-I9J0K1L2M3N4O5", stats: "AC -3 | STR+2 | HP회복+5", description: "데스나이트 세트", location: "데스나이트" },
    { id: 3, name: "요정족 판금 갑옷", category: "갑옷", image: "https://lh3.googleusercontent.com/d/1A_B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6", stats: "AC -6 | 원거리명중+2", description: "요정 전용 갑옷", location: "기란 제작" },
    { id: 4, name: "레이피어", category: "한손검", image: "https://lh3.googleusercontent.com/d/1-A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P", stats: "타격치 11/6 | 성공+1", description: "언데드 추가 타격", location: "기란" },
    { id: 5, name: "싸울아비 장검", category: "한손검", image: "https://lh3.googleusercontent.com/d/1_B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q", stats: "타격치 16/10 | 성공+4", description: "기사 전용 검", location: "기란" },
    { id: 6, name: "화염의 활", category: "활", image: "https://lh3.googleusercontent.com/d/1-C2D3E4F5G6H7I8J9K0L1M2N3O4P5Q6R", stats: "타격치 3/2 | 추가타격+4", description: "요정 전용 활", location: "제작" },
    { id: 7, name: "수정 갑옷", category: "갑옷", image: "https://lh3.googleusercontent.com/d/1_D2E3F4G5H6I7J8K9L0M1N2O3P4Q5R6S", stats: "AC -8", description: "기사/군주용 갑옷", location: "드롭" },
    { id: 8, name: "마나의 지팡이", category: "지팡이", image: "https://lh3.googleusercontent.com/d/1-E2F3G4H5I6J7K8L9M0N1O2P3Q4R5S6T", stats: "타격치 3/3 | MP 흡수", description: "법사 전용 지팡이", location: "드롭" },
    { id: 9, name: "파워 글로브", category: "장갑", image: "https://lh3.googleusercontent.com/d/1-F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U", stats: "AC -1 | STR+2", description: "완력 강화", location: "오우거" },
    { id: 10, name: "강철 부츠", category: "신발", image: "https://lh3.googleusercontent.com/d/1_G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V", stats: "AC -3", description: "튼튼한 부츠", location: "제작" },
    { id: 11, name: "마법 망토", category: "망토", image: "https://lh3.googleusercontent.com/d/1-H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W", stats: "AC -2 | MR+10", description: "마법 방어력", location: "상점" },
    { id: 12, name: "은기사의 방패", category: "방패", image: "https://lh3.googleusercontent.com/d/1_I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X", stats: "AC -3", description: "기사용 방패", location: "제작" }
  ],
  spells: [
    { id: 101, name: "힐", category: "1단계", image: "https://lh3.googleusercontent.com/d/1-J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y", stats: "MP 4 | HP 회복", description: "기초 회복", classes: ["군주", "기사", "요정", "마법사"] },
    { id: 102, name: "실드", category: "1단계", image: "https://lh3.googleusercontent.com/d/1_K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z", stats: "MP 8 | AC -2", description: "방어막", classes: ["군주", "기사", "요정", "마법사"] },
    { id: 103, name: "트리플 애로우", category: "정령", image: "https://lh3.googleusercontent.com/d/1-L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6A", stats: "MP 15 | 3연사", description: "요정 전용", classes: ["요정"] },
    { id: 104, name: "이럽션", category: "5단계", image: "https://lh3.googleusercontent.com/d/1_M2N3O4P5Q6R7S8T9U0V1W2X3Y4Z5A6B", stats: "MP 20 | 타격", description: "대지 폭발", classes: ["마법사"] },
    { id: 105, name: "헤이스트", category: "6단계", image: "https://lh3.googleusercontent.com/d/1-N2O3P4Q5R6S7T8U9V0W1X2Y3Z4A5B6C", stats: "MP 30 | 속도증가", description: "가속 마법", classes: ["마법사"] }
  ],
  monsters: [
    { id: 201, name: "데스나이트", category: "보스", image: "https://lh3.googleusercontent.com/d/1_O2P3Q4R5S6T7U8V9W0X1Y2Z3A4B5C6D", stats: "Lv 52 | 불", description: "본던 보스", location: "본던 7층" },
    { id: 202, name: "바포메트", category: "보스", image: "https://lh3.googleusercontent.com/d/1-P2Q3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E", stats: "Lv 45 | 바람", description: "말섬 보스", location: "말섬 던전" },
    { id: 203, name: "오크", category: "일반", image: "https://lh3.googleusercontent.com/d/1_Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F", stats: "Lv 5 | 무", description: "일반 몬스터", location: "전역" }
  ]
};