import { DATA } from './data.js';

class LineageApp {
  constructor() {
    this.currentCategory = 'items';
    this.searchQuery = '';
    this.expandedRows = new Set();
    this.data = DATA || { items: [], spells: [], monsters: [], crafting: [] };
    this.init();
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.render();
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
      btn.onclick = () => {
        this.tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.getAttribute('data-category');
        this.expandedRows.clear();
        this.render();
      };
    });

    if (this.searchInput) {
      this.searchInput.oninput = (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
      };
    }
  }

  getFilteredData() {
    const categoryData = this.data[this.currentCategory] || [];
    if (!this.searchQuery) return categoryData;

    return categoryData.filter(item => {
      const name = (item.name || "").toLowerCase();
      const stats = (item.stats || "").toLowerCase();
      return name.includes(this.searchQuery) || stats.includes(this.searchQuery);
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

    if (window.lucide) lucide.createIcons();
  }

  renderHeader() {
    if (!this.tableHeader) return;
    const headers = {
      items: ['이름 / 분류', '인벤 상세 정보 (능력치/클래스/무게/드롭)'],
      spells: ['마법 이름', '마법 상세 정보 (소모MP/효과)'],
      monsters: ['몬스터 이름', '레벨 / 속성 / 지역 / 드롭템'],
      crafting: ['아이템 이름', 'NPC / 제작 재료']
    };

    const currentHeaders = headers[this.currentCategory] || headers.items;
    this.tableHeader.innerHTML = currentHeaders
      .map(h => `<th>${h}</th>`)
      .join('');
  }

  renderBody(data) {
    if (!this.tableBody) return;
    this.tableBody.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    data.forEach(item => {
      const row = document.createElement('tr');
      row.className = 'expandable-row';
      row.innerHTML = this.getRowHTML(item);
      
      row.onclick = () => {
        if (this.expandedRows.has(item.id)) this.expandedRows.delete(item.id);
        else this.expandedRows.add(item.id);
        this.render();
      };
      
      fragment.appendChild(row);

      if (this.expandedRows.has(item.id)) {
        const detailsRow = document.createElement('tr');
        detailsRow.className = 'details-row';
        detailsRow.innerHTML = `
          <td colspan="2" style="background: rgba(0,0,0,0.2); padding: 2rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
              <div>
                <h4 style="color:var(--primary); margin-bottom:0.5rem; font-size:0.9rem;">상세 정보</h4>
                <p style="font-size:1rem;">${item.stats || '정보 없음'}</p>
              </div>
              <div>
                <h4 style="color:var(--primary); margin-bottom:0.5rem; font-size:0.9rem;">분류</h4>
                <p style="font-size:1rem;">${item.category}</p>
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
      monsters: 'ghost',
      crafting: 'hammer'
    }[this.currentCategory] || 'shield';

    const hasImage = item.image && item.image.length > 10;
    
    return `
      <td>
        <div class="item-info">
          <div style="width: 40px; height: 40px; min-width: 40px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 8px;">
            ${hasImage ? `
              <img src="${item.image}" 
                   referrerpolicy="no-referrer" 
                   alt="${item.name}" 
                   style="width: 28px; height: 28px; object-fit: contain;"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="default-icon-placeholder" style="display:none;"><i data-lucide="${defaultIcon}"></i></div>
            ` : `
              <div class="default-icon-placeholder"><i data-lucide="${defaultIcon}"></i></div>
            `}
          </div>
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <div style="font-weight: 800; font-size: 1.05rem; white-space: nowrap;">${item.name}</div>
            <span class="category-badge" style="font-size: 0.75rem; background: rgba(255,255,255,0.1); padding: 0.1rem 0.5rem; border-radius: 4px; color: var(--text-dim); white-space: nowrap;">${item.category}</span>
          </div>
        </div>
      </td>
      <td style="color: var(--text-dim); font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.stats}</td>
    `;
  }
}

window.onload = () => {
  new LineageApp();
};