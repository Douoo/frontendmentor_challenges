import { challenges } from "./data.js";

loadData();

function loadData() {
  challenges.forEach((item) => {
    createCard(item);
  });
}

function createCard(item) {
  const gridEl = document.getElementById("gridEl");
  const url = item.internalhost === true ? `./${item.name}` : item.url;
  const image = `./${item.name}/screenshot/desktop.png`;
  const repo =
    item.internalhost === true
      ? `https://github.com/douoo/frontendmentor_challenges/tree/main/${item.name}`
      : item.repo;

  const cardHTML = `
    <li class="card">
      <picture class="image">
        <img src=${image} alt=""/>
      </picture>
      <article class="text">            
        <h2>
          <a href="${url}">${item.title}</a>
        </h2>          
        <small>
          <a href="${repo}">Github repo</a>
        </small>  
      </article>
    </li>
  `;

  gridEl.insertAdjacentHTML("beforeend", cardHTML);
}
