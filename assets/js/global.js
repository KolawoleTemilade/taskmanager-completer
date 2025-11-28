
function loadComponentScripts(element) {
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
      const newScript = document.createElement("script");
  
      if (script.src) {
        newScript.src = script.src;
      }
      if (script.textContent) {
        newScript.textContent = script.textContent;
      }

      script.remove();
      element.appendChild(newScript);
    }
  }
  
  const importElement = document.querySelectorAll("[data-import]");
  
  const filePath = (elements) => {
    for (let element of elements) {
      const importElement = element.getAttribute("data-import");
  
      fetch(importElement)
        .then((res) => {
          if (!res.ok) {
            // Use a more specific error for debugging
            throw new Error(
              `Failed to load: ${importElement}. Status: ${res.status}`
            );
          }
          return res.text();
        })
        .then((componentHTML) => {
          // 1. Insert the HTML into the current container
          element.innerHTML = componentHTML;
  
          // 2. Execute any scripts found within the inserted HTML
          loadComponentScripts(element);
  
          // 3. Check for and load any components nested inside this one
          const nestedImports = element.querySelectorAll("[data-import]");
          if (nestedImports.length > 0) {
            filePath(nestedImports);
          }
        })
        .catch((error) => {
          console.error("Error loading component:", error);
          element.innerHTML = `<h4>Component not found: ${importElement}</h4>`;
        });
    }
  };
  
  // Start the loading process on all top-level components
  filePath(importElement);
  