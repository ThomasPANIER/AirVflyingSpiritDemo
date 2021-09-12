function addLayer() {
  let layer = document.createElement("div");
  layer.classList.add("layer");
  document.body.appendChild(layer);
  return layer;
}
function closeLayer() {
  document.querySelector(".layer").remove();
  document.querySelector(".message-box").remove();
  
  sessionStorage.setItem("informed", true);
}
function makeDivButton() {
  let divButton = document.createElement("div");
  divButton.classList.add("div-button", "text-center", "m-auto", "p-2", "bd-highlight");
  return divButton;
}
function makeCloseButton() {
  let closeButton = document.createElement("button");
  closeButton.classList.add("btn", "btn-dark", "btn-layer");
  closeButton.innerText = "J'ai compris";
  closeButton.addEventListener("click", closeLayer);
  return closeButton;
}
function makeWarning(text) {
  let div = document.createElement("div");
  div.classList.add("m-auto", "p-1");
  let title = document.createElement("h6");
  title.classList.add("text-decoration-underline")
  title.innerText = "Information importante";
  let p = document.createElement("p");
  p.classList.add("p-2", "bd-highlight");
  p.innerText = text;
  let a = document.createElement("a");
  a.classList.add("position-absolute", "top-0", "end-0", "a-layer");
  a.setAttribute("href", "confidentialite.html");
  a.innerText = "Politique de confidentialité";
  div.append(title, p, a);
  return div;
}
function addMessageBox(text) {
  let messageBox = document.createElement("div");
  messageBox.classList.add("message-box", "div-justify", "m-auto", "d-flex", "bd-highlight");
  let warning = makeWarning(text);
  let divButton = makeDivButton();
  let closeButton = makeCloseButton();
  document.body.appendChild(messageBox);
  divButton.append(closeButton);
  messageBox.append(warning, divButton);
}

if(!sessionStorage.getItem("informed")) {
  addLayer();
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        addMessageBox(httpRequest.responseText);
      }
      else {
        addMessageBox("Nous utilisons des cookies pour permettent l'activation de fonctionnalités essentielles telles que la sécurité, la vérification d'identité et la gestion de réseau. Ces cookies ne peuvent pas être désactivés.");
      }
    }
  };
  httpRequest.open('GET', 'data/info.txt', true);
  httpRequest.send();
}