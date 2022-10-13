let squere = {
  a1: "",
  a2: "",
  a3: "",
  b1: "",
  b2: "",
  b3: "",
  c1: "",
  c2: "",
  c3: "",
};

let player = "X";
let warning = "";
let playing = "";

reset();

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", itemClick);
});

document.querySelector(".reset").addEventListener("click", reset);

function itemClick(event) {
  let item = event.target.getAttribute("data-item");

  if (squere[item] == "") {
    squere[item] = player;
    renderSquere();
    trocarPlayer();
    rederInfo();
  }
}

function renderSquere() {
  for (let i in squere) {
    let item = document.querySelector(`div[data-item = ${i}]`);
    item.innerHTML = squere[i];
  }
}

function trocarPlayer() {
  player = player == "X" ? "O" : "X";
}

function rederInfo() {
  document.querySelector(".vez").innerHTML = player;
  document.querySelector(".resultado").innerHTML = warning;
}

function reset() {
  warning = "";
  for (let i in squere) {
    squere[i] = "";
  }
  renderSquere();
  trocarPlayer();
  rederInfo();
}
