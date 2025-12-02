const template = document.createElement("template");
template.innerHTML = `
<style>
.dashboard-cards{ 
  border:1px solid ;
  border-radius:10px;
  display:flex; 
  width:100%; 
}
.card-content{
  display:flex;
  justify-content:space-around;
  flex-direction:column;
  padding:20px;
  width:100%;
}
.card-title{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.card-img{
  background:blue;
  display:flex;
  align-items:center;
  justify-content:center;
}
.card-details{
  display:flex;
  flex-direction:column;
}
</style>

<div class="dashboard-cards">
  <div class="card-content">
    <div class="card-title">
      <h3></h3>
      <div class="card-img">
        <img/>
      </div>
    </div>

    <div class ="card-details">
      <h2></h2>
      <p></p>
    </div>
  </div>
</div>
`;
const quickActions = [
  {
    icon: "/assets/images/icon/task.svg",
    title: "create new task",
    subtext: "add a task to your list",
  },
  {
    icon: "/assets/images/icon/expenses.svg",
    title: "track expense",
    subtext: "record a new expense",
  },
  {
    icon: "/assets/images/icon/note.svg",
    title: "write a note",
    subtext: "capture your thought",
  },
]

class DetailsCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("icons");
    this.shadowRoot.querySelector("h2").innerText = this.getAttribute("figure");
    this.shadowRoot.querySelector("p").innerText = this.getAttribute("progressStatus");
  }
}

window.customElements.define("dashboard-cards", DetailsCard);

const container = document.getElementById("quickActionsContainer");

quickActions.forEach(action => {
  container.innerHTML += `
    <div class="action-card">
    <div class= "card-img">
    <img src="${action.icon}" />
    </div>
    <div class ="card-text ">
      <h3>${action.title} <span><p>${action.subtext}</p></span></h3>
      
    </div>
  
    </div>
  `;
});