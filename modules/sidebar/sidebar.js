if (!window.sidebarScriptLoaded) {
  window.sidebarScriptLoaded = true;

  function loadPageCss(path) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = path;
    document.head.appendChild(link);
  }

  const navItems = document.querySelectorAll('#sidebar nav ul li');
  const pages = document.querySelectorAll('.page');

  navItems.forEach(item => {
    item.addEventListener('click', () => {

      const pageId = item.getAttribute('data-page');
      console.log("clicked:", pageId);

      // Remove all active pages
      pages.forEach(page => page.classList.remove('active'));

      // Show selected page
      const target = document.getElementById(pageId);
      if (target) {
        target.classList.add('active');
      } else {
        console.error("No page with ID:", pageId);
      }

    });
  });
}


// const navItems = document.querySelectorAll("#sidebar [data-page]");
// const pages = document.querySelectorAll(".page");

// navItems.forEach(item => {
//     item.addEventListener("click", () => {
//         const pageId = item.dataset.page;

//         // Hide all pages
//         pages.forEach(p => p.classList.remove("active"));

//         // Show selected page
//         document.getElementById(pageId).classList.add("active");

//         // Load content if needed
//         loadPageContent(pageId);
//     });
// });
// function loadPageContent(pageId) {
//     const page = document.getElementById(pageId);
//     const importPath = page.dataset.import;

//     // If no import path, do nothing
//     if (!importPath) return;

//     // Prevent reloading the same page twice
//     if (page.dataset.loaded === "true") return;

//     fetch(importPath)
//         .then(res => res.text())
//         .then(html => {
//             page.innerHTML = html;
//             page.dataset.loaded = "true";
//         })
//         .catch(err => {
//             page.innerHTML = "<p>Failed to load page.</p>";
//             console.error("Page import error:", err);
//         });
// }
