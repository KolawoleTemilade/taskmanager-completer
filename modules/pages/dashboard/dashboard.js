const template = document.createElement("template");
template.innerHTML = `
<style>
.dashboard-cards{ 
  border:1px solid ;
  border-radius:10px;
  width:80%;
}
.card-content{
  display:flex;
  justify-content:space-around;
  flex-direction:column;
  padding:20px;
  gap:20px;

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