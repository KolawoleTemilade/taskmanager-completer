document.addEventListener("DOMContentLoaded", () => {
    // Buttons
    const myTaskBtn = document.getElementById("myTaskBtn");
    const aiSummaryBtn = document.getElementById("aiSummaryBtn");
  
    // Panels
    const taskTab = document.getElementById("taskTab");
    const summaryTab = document.getElementById("summaryTab");
  
    // ---- SWITCH TO MY TASK ----
    myTaskBtn.addEventListener("click", () => {
      myTaskBtn.classList.add("active");
      aiSummaryBtn.classList.remove("active");
  
      taskTab.style.display = "block";
      summaryTab.style.display = "none";
    });
  
    // ---- SWITCH TO AI SUMMARY ----
    aiSummaryBtn.addEventListener("click", () => {
      aiSummaryBtn.classList.add("active");
      myTaskBtn.classList.remove("active");
  
      summaryTab.style.display = "block";
      taskTab.style.display = "none";
    });
  
  
    // ------------------------------------------------------
    // OPTIONAL: Inner summary switch (Latest vs History)
    // ------------------------------------------------------
  
    const latestSummaryBtn = document.getElementById("latestSummaryBtn");
    const historySummaryBtn = document.getElementById("historySummaryBtn");
  
    latestSummaryBtn.addEventListener("click", () => {
      latestSummaryBtn.classList.add("active");
      historySummaryBtn.classList.remove("active");
      // You can add show/hide logic here later
    });
  
    historySummaryBtn.addEventListener("click", () => {
      historySummaryBtn.classList.add("active");
      latestSummaryBtn.classList.remove("active");
      // You can add show/hide logic here later
    });
  
  });
  