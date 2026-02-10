export const DATA = {
  items: [
    { id: 1, name: "집행자의 검", category: "양손검", image: "https://pds.saramin.co.kr/company/logo/202303/23/rsf7be_899o-1p209v_logo.png", stats: "타격치 34/40 | 추가타격+28 | 공격성공+13", description: "리니지 클래식 최강의 검. 침묵의 동굴에서 제작 가능합니다.", location: "라스타바드 제작" },
    { id: 2, name: "데스나이트의 투구", category: "투구", image: "https://file.ncloud.com/lineage/item/helm_death.png", stats: "AC -3 | STR+2 | HP회복+5", description: "데스나이트 세트의 핵심 부위입니다.", location: "데스나이트 드롭" },
    { id: 3, name: "요정족 판금 갑옷", category: "갑옷", image: "https://file.ncloud.com/lineage/item/armor_elf_plate.png", stats: "AC -6 | 원거리명중+2", description: "요정 전용의 가벼운 판금 갑옷입니다.", location: "기란 제작" },
    { id: 4, name: "마법 망토", category: "망토", image: "https://file.ncloud.com/lineage/item/cloak_magic.png", stats: "AC -2 | MR+10", description: "기초적인 마법 방어구입니다.", location: "상점 판매" },
    { id: 5, name: "파워 글로브", category: "장갑", image: "https://file.ncloud.com/lineage/item/glove_power.png", stats: "AC -1 | STR+2", description: "완력을 높여주는 장갑입니다.", location: "오우거 드롭" },
    { id: 6, name: "레이피어", category: "한손검", image: "https://file.ncloud.com/lineage/item/sword_rapier.png", stats: "타격치 11/6 | 공격성공+1", description: "언데드 추가 타격이 있는 세검입니다.", location: "기란 제작" },
    { id: 7, name: "싸울아비 장검", category: "한손검", image: "https://file.ncloud.com/lineage/item/sword_ssul.png", stats: "타격치 16/10 | 공격성공+4", description: "기사들의 국민 무기입니다.", location: "기란 제작" },
    { id: 8, name: "활골무", category: "장갑", image: "https://file.ncloud.com/lineage/item/glove_elf.png", stats: "AC -1 | 원거리공격+1 | 원거리명중+1", description: "요정의 명중률을 높여줍니다.", location: "제작" },
    { id: 9, name: "보호 망토", category: "망토", image: "https://file.ncloud.com/lineage/item/cloak_prot.png", stats: "AC -3", description: "방어력이 높은 망토입니다.", location: "일반 드롭" },
    { id: 10, name: "강철 부츠", category: "신발", image: "https://file.ncloud.com/lineage/item/boots_steel.png", stats: "AC -3", description: "튼튼한 강철 신발입니다.", location: "제작" }
  ],
  spells: [
    { id: 101, name: "힐", category: "1단계", image: "https://file.ncloud.com/lineage/spell/heal.png", stats: "MP 4 | HP 회복", description: "체력을 소량 회복합니다.", classes: ["군주", "기사", "요정", "마법사"] },
    { id: 102, name: "실드", category: "1단계", image: "https://file.ncloud.com/lineage/spell/shield.png", stats: "MP 8 | AC -2", description: "방어막을 생성합니다.", classes: ["군주", "기사", "요정", "마법사"] },
    { id: 103, name: "트리플 애로우", category: "정령", image: "https://file.ncloud.com/lineage/spell/triple.png", stats: "MP 15 | 3연사", description: "화살 3발을 빠르게 발사합니다.", classes: ["요정"] },
    { id: 104, name: "그레이터 힐", category: "3단계", image: "https://file.ncloud.com/lineage/spell/gheal.png", stats: "MP 12 | HP 대량 회복", description: "강력한 치유 마법입니다.", classes: ["요정", "마법사"] },
    { id: 105, name: "이럽션", category: "5단계", image: "https://file.ncloud.com/lineage/spell/eruption.png", stats: "MP 20 | 땅 속성 피해", description: "대지를 폭발시켜 피해를 줍니다.", classes: ["마법사"] },
    { id: 106, name: "파이어 볼", category: "4단계", image: "https://file.ncloud.com/lineage/spell/fireball.png", stats: "MP 20 | 범위 피해", description: "화염구를 던집니다.", classes: ["마법사"] },
    { id: 107, name: "디텍션", category: "2단계", image: "https://file.ncloud.com/lineage/spell/detection.png", stats: "MP 8 | 은신 감지", description: "숨어있는 적을 찾아냅니다.", classes: ["군주", "요정", "마법사"] },
    { id: 108, name: "인챈트 웨폰", category: "2단계", image: "https://file.ncloud.com/lineage/spell/ewea.png", stats: "MP 10 | 추가타격+2", description: "무기에 마력을 부여합니다.", classes: ["기사", "요정", "마법사"] }
  ],
  monsters: [
    { id: 201, name: "데스나이트", category: "보스", image: "https://file.ncloud.com/lineage/monster/death.png", stats: "Lv 52 | 불 속성", description: "글루디오 던전 7층 보스입니다.", location: "본던 7층" },
    { id: 202, name: "바포메트", category: "보스", image: "https://file.ncloud.com/lineage/monster/bapho.png", stats: "Lv 45 | 바람 속성", description: "말섬 던전의 보스입니다.", location: "말섬 던전" },
    { id: 203, name: "오크", category: "일반", image: "https://file.ncloud.com/lineage/monster/orc.png", stats: "Lv 5 | 무 속성", description: "가장 흔한 몬스터입니다.", location: "전역" },
    { id: 204, name: "베레스", category: "보스", image: "https://file.ncloud.com/lineage/monster/beleth.png", stats: "Lv 50 | 불 속성", description: "강력한 마법을 구사합니다.", location: "윈다우드 성 던전" },
    { id: 205, name: "켈베로스", category: "정예", image: "https://file.ncloud.com/lineage/monster/cerberus.png", stats: "Lv 35 | 불 속성", description: "세 개의 머리를 가진 개입니다.", location: "화룡의 둥지" },
    { id: 206, name: "장로", category: "정예", image: "https://file.ncloud.com/lineage/monster/elder.png", stats: "Lv 30 | 물 속성", description: "얼음 마법을 사용합니다.", location: "상아탑" },
    { id: 207, name: "도플갱어", category: "특수", image: "https://file.ncloud.com/lineage/monster/doppel.png", stats: "Lv 40 | 변신", description: "상대방의 모습으로 변신합니다.", location: "거울의 숲" }
  ]
};