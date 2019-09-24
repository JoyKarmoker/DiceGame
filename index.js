var pd1, pd2;
pd1 = Math.floor(Math.random() * 6) + 1;
pd2 = Math.floor(Math.random() * 6) + 1;

var image1 = "img/dice" + pd1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);

var image2 = "img/dice" + pd2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (pd1 > pd2) {

  document.querySelector("h1").textContent = "🚩Player 1 wins";
} else if (pd2 > pd1) {

  document.querySelector("h1").textContent = "Player 2 wins🚩";
} else {
  document.querySelector("h1").textContent = "🚩Draw🚩";
}
