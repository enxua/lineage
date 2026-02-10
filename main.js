import { DATA } from './data.js';

class LineageApp {
  constructor() {
    this.currentCategory = 'items';
    this.searchQuery = '';
    this.expandedRows = new Set();

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
      this.searchQuery = e.target.value.toLowerCase();
      this.render();
    });
  }

  getFilteredData() {
    const categoryData = DATA[this.currentCategory];
    if (!this.searchQuery) return categoryData;

    return categoryData.filter(item => {
      return (
        item.name.toLowerCase().includes(this.searchQuery) ||
        item.category.toLowerCase().includes(this.searchQuery) ||
        (item.stats && item.stats.toLowerCase().includes(this.searchQuery)) ||
        (item.description && item.description.toLowerCase().includes(this.searchQuery))
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
      items: ['이름 / 분류', '옵션', '획득처'],
      spells: ['이름 / 분류', '효과', '사용 가능 클래스'],
      monsters: ['이름 / 분류', '레벨 / 속성', '주요 서식지']
    };

    this.tableHeader.innerHTML = headers[this.currentCategory]
      .map(h => `<th>${h}</th>`)
      .join('');
  }

  renderBody(data) {
    this.tableBody.innerHTML = '';
    
    data.forEach(item => {
      const row = document.createElement('tr');
      row.className = 'expandable-row';
      row.dataset.id = item.id;
      
      const isExpanded = this.expandedRows.has(item.id);

      row.innerHTML = this.getRowHTML(item);
      row.addEventListener('click', () => this.toggleRow(item.id));
      
      this.tableBody.appendChild(row);

      if (isExpanded) {
        const detailsRow = document.createElement('tr');
        detailsRow.className = 'details-row';
        detailsRow.innerHTML = `
          <td colspan="3">
            <div class="details-content">
              <div class="detail-item">
                <h4>상세 설명</h4>
                <p>${item.description || '정보 없음'}</p>
              </div>
              ${this.getExtraDetails(item)}
            </div>
          </td>
        `;
        this.tableBody.appendChild(detailsRow);
      }
    });
  }

  getRowHTML(item) {
    const defaultIcon = {
      items: 'sword',
      spells: 'wand-2',
      monsters: 'ghost'
    }[this.currentCategory];

    const imageHTML = `<img src="${item.image}" alt="${item.name}" class="item-image" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'default-icon-placeholder\'><i data-lucide=\'${defaultIcon}\'></i></div>'; lucide.createIcons();">`;

    if (this.currentCategory === 'items') {
      return `
        <td>
          <div class="item-info">
            <div class="image-container">${imageHTML}</div>
            <div>
              <div class="item-name">${item.name}</div>
              <span class="category-badge">${item.category}</span>
            </div>
          </div>
        </td>
        <td class="stats-text">${item.stats}</td>
        <td class="stats-text">${item.location}</td>
      `;
    } else if (this.currentCategory === 'spells') {
      return `
        <td>
          <div class="item-info">
            <div class="image-container">${imageHTML}</div>
            <div>
              <div class="item-name">${item.name}</div>
              <span class="category-badge">${item.category}</span>
            </div>
          </div>
        </td>
        <td class="stats-text">${item.stats}</td>
        <td class="stats-text">${item.classes.join(', ')}</td>
      `;
    } else {
      return `
        <td>
          <div class="item-info">
            <div class="image-container">${imageHTML}</div>
            <div>
              <div class="item-name">${item.name}</div>
              <span class="category-badge">${item.category}</span>
            </div>
          </div>
        </td>
        <td class="stats-text">${item.stats}</td>
        <td class="stats-text">${item.location}</td>
      `;
    }
  }

  getExtraDetails(item) {
    if (this.currentCategory === 'items') {
      return `
        <div class="detail-item">
          <h4>아이템 ID</h4>
          <p>#${item.id.toString().padStart(4, '0')}</p>
        </div>
      `;
    }
    return '';
  }

  toggleRow(id) {
    if (this.expandedRows.has(id)) {
      this.expandedRows.delete(id);
    } else {
      this.expandedRows.add(id);
    }
    this.render();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LineageApp();
});
