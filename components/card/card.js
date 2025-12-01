export function renderPageLayout({ title, subtitle = "", icon = "", contentHtml = "" }) {
    const layout = document.createElement("div");
  
    layout.innerHTML = `
      <div class="page-layout">
        <header class="page-header">
          <div class="icon-box">
            <img class="page-icon" src="${icon}" alt="${title} icon"/>
          </div>
  
          <div class="text-box">
            <h2 class="page-title">${title}</h2>
            <p class="page-subtitle">${subtitle}</p>
          </div>
        </header>
  
        <div class="page-content">
          ${contentHtml}
        </div>
      </div>
    `;
  
    return layout.firstElementChild;
  }
   