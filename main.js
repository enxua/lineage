import { DATA } from './data.js';

class LineageApp {
  constructor() {
    this.currentCategory = 'items';
    this.searchQuery = '';
    this.expandedRows = new Set();
    this.data = DATA;

    this.init();
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.render();
    lucide.createIcons();
  }

  cacheDOM() {
    this.tabBtns = document.querySelectorAll('.tab-btn');
    this.tableHeader = document.getElementById('table-header');
    this.tableBody = document.getElementById('table-body');
    this.searchInput = document.getElementById('global-search');
    this.noResults = document.getElementById('no-results');
  }

  bindEvents() {
    this.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.category;
        this.expandedRows.clear();
        this.render();
      });
    });

    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.render();
    });
  }

  getFilteredData() {
    const categoryData = this.data[this.currentCategory] || [];
    if (!this.searchQuery) return categoryData;

    return categoryData.filter(item => {
      return (
        item.name.toLowerCase().includes(this.searchQuery) ||
        (item.stats && item.stats.toLowerCase().includes(this.searchQuery))
      );
    });
  }

  render() {
    const data = this.getFilteredData();
    this.renderHeader();
    this.renderBody(data);
    
    if (data.length === 0) {
      this.noResults.classList.remove('hidden');
    } else {
      this.noResults.classList.add('hidden');
    }

    lucide.createIcons();
  }

  renderHeader() {
    const headers = {
      items: ['이름 / 분류', '인벤 가이드 상세 정보'],
      spells: ['마법 이름 / 분류', '마법 정보 (MP/효과 등)'],
      monsters: ['몬스터 이름', '레벨 / 속성 / 드롭 / 지역']
    };

    this.tableHeader.innerHTML = headers[this.currentCategory]
      .map(h => `<th>${h}</th>`)
      .join('');
  }

  renderBody(data) {
    this.tableBody.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    data.forEach(item => {
      const row = document.createElement('tr');
      row.className = 'expandable-row';
      row.innerHTML = this.getRowHTML(item);
      
      row.addEventListener('click', () => {
        if (this.expandedRows.has(item.id)) this.expandedRows.delete(item.id);
        else this.expandedRows.add(item.id);
        this.render();
      });
      
      fragment.appendChild(row);

      if (this.expandedRows.has(item.id)) {
        const detailsRow = document.createElement('tr');
        detailsRow.className = 'details-row';
        detailsRow.innerHTML = `
          <td colspan="2">
            <div class="details-content">
              <div class="detail-item">
                <h4>상세 속성</h4>
                <p>${item.stats || '정보 없음'}</p>
              </div>
              <div class="detail-item">
                <h4>분류</h4>
                <p>${item.category}</p>
              </div>
            </div>
          </td>
        `;
        fragment.appendChild(detailsRow);
      }
    });
    
    this.tableBody.appendChild(fragment);
  }

  getRowHTML(item) {
    const defaultIcon = {
      items: 'sword',
      spells: 'wand-2',
      monsters: 'ghost'
    }[this.currentCategory] || 'shield';

    // 구글 이미지 프록시 주소를 사용하므로 hotlink 차단 방지됨
    return `
      <td>
        <div class="item-info">
          <div class="image-container">
            <img src="${item.image}" 
                 referrerpolicy="no-referrer" 
                 alt="${item.name}" 
                 class="item-image" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="default-icon-placeholder" style="display:none;"><i data-lucide="${defaultIcon}"></i></div>
          </div>
          <div>
            <div class="item-name">${item.name}</div>
            <span class="category-badge">${item.category}</span>
          </div>
        </div>
      </td>
      <td class="stats-text">${item.stats}</td>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LineageApp();
});