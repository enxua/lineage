export const DATA = {
  items: [
    {
      id: 1,
      name: "집행자의 검",
      category: "양손검",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Sword",
      stats: "공격력 30/40, 추가 타격+20, 공격 성공+10",
      description: "기사 전용. 리니지 최고의 검 중 하나로, 압도적인 공격력을 자랑합니다.",
      location: "제작 (라스타바드)"
    },
    {
      id: 2,
      name: "데스나이트의 투구",
      category: "투구",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Helm",
      stats: "AC -3, 힘+2, HP 회복+5",
      description: "데스나이트 세트의 일부로, 착용 시 데스나이트 변신 효과를 얻을 수 있습니다.",
      location: "데스나이트 드롭"
    },
    {
      id: 3,
      name: "요정족 판금 갑옷",
      category: "갑옷",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Armor",
      stats: "AC -6, 원거리 명중+2",
      description: "요정 전용 가벼운 갑옷으로, 높은 방어력과 원거리 공격 보너스를 제공합니다.",
      location: "기란 마을 제작"
    },
    {
      id: 4,
      name: "마법 망토",
      category: "망토",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Cloak",
      stats: "AC -2, 마법 방어(MR)+10",
      description: "모든 클래스가 착용 가능한 망토로, 마법 방어력을 크게 높여줍니다.",
      location: "상점 및 일반 드롭"
    },
    {
      id: 5,
      name: "파워 글로브",
      category: "장갑",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Glove",
      stats: "AC -1, 힘(STR)+2",
      description: "힘을 증가시켜주는 강력한 장갑입니다.",
      location: "오우거 드롭"
    }
  ],
  spells: [
    {
      id: 101,
      name: "힐",
      category: "일반마법 1단계",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Heal",
      stats: "MP 4, HP 회복",
      description: "대상의 HP를 조금 회복 시킵니다. 언데드 몬스터에게 사용 시 피해를 입힙니다.",
      classes: ["군주", "기사", "요정", "마법사"]
    },
    {
      id: 102,
      name: "실드",
      category: "일반마법 1단계",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Shield",
      stats: "MP 8, 지속시간 1200초",
      description: "방어력을 강화하여 AC를 2만큼 낮춰줍니다.",
      classes: ["군주", "기사", "요정", "마법사"]
    },
    {
      id: 103,
      name: "트리플 애로우",
      category: "정령마법",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Triple",
      stats: "MP 15, 화살 3발 연속 발사",
      description: "요정 전용 마법으로, 아주 짧은 시간에 3발의 화살을 쏘아 강력한 데미지를 입힙니다.",
      classes: ["요정"]
    },
    {
      id: 104,
      name: "파이어 볼",
      category: "일반마법 4단계",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Fire",
      stats: "MP 20, 범위 마법 피해",
      description: "지정한 대상 주위에 화염구를 던져 범위 피해를 입힙니다.",
      classes: ["마법사"]
    },
    {
      id: 105,
      name: "헤이스트",
      category: "일반마법 6단계",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Haste",
      stats: "MP 30, 이동 및 공격 속도 증가",
      description: "대상의 이동 속도와 공격 속도를 크게 향상시킵니다.",
      classes: ["마법사", "요정(일부)"]
    }
  ],
  monsters: [
    {
      id: 201,
      name: "데스나이트",
      category: "보스",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Death",
      stats: "Level 52, 불 속성",
      description: "글루디오 던전 7층의 주인으로, 리니지를 상징하는 가장 유명한 보스 몬스터입니다.",
      location: "글루디오 던전 7층"
    },
    {
      id: 202,
      name: "바포메트",
      category: "보스",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Bapho",
      stats: "Level 45, 바람 속성",
      description: "말하는 섬 던전 2층에서 출몰하며, 강력한 범위 마법을 사용합니다.",
      location: "말하는 섬 던전 2층"
    },
    {
      id: 203,
      name: "오크",
      category: "일반",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Orc",
      stats: "Level 5, 무 속성",
      description: "아덴 대륙 전역에서 흔히 볼 수 있는 몬스터로, 무리를 지어 다닙니다.",
      location: "말하는 섬, 은기사 마을 주변 등"
    },
    {
      id: 204,
      name: "장로",
      category: "정예",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Elder",
      stats: "Level 30, 물 속성",
      description: "강력한 마법을 사용하는 정예 몬스터로, 마법서와 각종 주문서를 드롭합니다.",
      location: "본던, 용의 계곡"
    },
    {
      id: 205,
      name: "커츠",
      category: "보스",
      image: "https://via.placeholder.com/64/1a1a1a/E3C08D?text=Kurtz",
      stats: "Level 40, 땅 속성",
      description: "말하는 섬 선착장에 나타나는 보스로, 기사단의 장비들을 드롭합니다.",
      location: "말하는 섬 선착장"
    }
  ]
};

