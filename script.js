// Created by TheVoidNexus on 31.01.2024 | Updated: 07.02.2024

function redirect() {
  window.location.href = "https://thevoidnexus.github.io/database/";
}
function redirect2() {
  window.location.href = "https://thevoidnexus.github.io/calculator/";
}

//

let money;

function loaded() {
  money = localStorage.getItem(savedMoney);
  alert(money);
}

window.onload = loaded();
window.onload = update();

function update() {
  let Info = document.getElementById(`Info`)
  Info.innerHTML = `You currently have $${money}.`
}

function clicker() {
money += 1;
update();
localStorage.setItem(money, money);
}
