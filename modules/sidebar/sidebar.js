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
