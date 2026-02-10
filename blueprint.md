# Lineage Classic Info - Project Blueprint

## 1. Overview
리니지 클래식 사용자를 위한 현대적이고 세련된 정보 공유 플랫폼입니다. 공식 사이트의 불편한 UI를 개선하여, 한눈에 들어오는 데이터 시각화와 강력한 실시간 검색 기능을 제공합니다.

## 2. Design System
- **Theme**: Deep Dark Mode (Midnight Blue & Charcoal Gray)
- **Colors**: 
  - Primary: `#E3C08D` (Classic Gold - 포인트 컬러)
  - Secondary: `#2C3E50` (Deep Navy)
  - Accent: `#E74C3C` (Ruby Red - 강조 요소)
  - Background: `oklch(20% 0.02 260)` (Subtle texture 적용)
- **Typography**: 
  - Headings: 'Pretendard', sans-serif (Bold, 1.2 tracking)
  - Body: 'Pretendard', sans-serif (Regular, 1.6 line-height)
- **Effects**: 
  - Glassmorphism: 헤더 및 검색바에 적용
  - Soft Shadows: 카드 및 버튼에 다층 레이어 그림자 적용
  - Micro-interactions: 호버 시 부드러운 스케일 업 및 글로우 효과

## 3. Key Features
- **Real-time Search**: 사용자가 입력하는 즉시 테이블의 모든 필드(이름, 옵션, 획득처 등)를 필터링합니다.
- **Unified Info Table**: 
  - 아이템, 마법, 몬스터 카테고리별 탭 인터페이스.
  - 이미지 기반의 리스트 레이아웃.
  - 클릭 시 상세 정보가 아래로 펼쳐지는 Expandable Row UI.
- **Responsive Design**: 모바일과 데스크탑 모두에서 최적화된 표 레이아웃 (모바일에서는 카드 형태로 전환).

## 4. Technology Stack
- **Frontend**: HTML5, Modern CSS (Grid, Flex, Container Queries, :has()), Vanilla JavaScript (ES Modules).
- **Components**: Web Components (Custom Elements)를 사용한 재사용 가능한 UI 요소.
- **Icons**: Lucide Icons (CDN) 또는 전용 SVG 아이콘.

## 5. Implementation Steps
1. `index.html` 및 `style.css` 기본 구조 설계.
2. `main.js`에서 데이터 로딩 및 실시간 검색 로직 구현.
3. 아이템, 마법, 몬스터 데이터를 담을 `data.js` 구성 (스크레이핑 데이터 기반).
4. 각 카테고리별 상세 컴포넌트 제작 및 스타일링.
5. 최종 폴리싱 및 모바일 반응형 테스트.
