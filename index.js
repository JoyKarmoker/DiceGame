var pd1, pd2;
pd1 = Math.random() * 6;
pd1 = Math.floor(pd1);
pd1 = pd1 + 1;

pd2 = Math.random() * 6;
pd2 = Math.floor(pd2);
pd2 = pd2 + 1;

if(pd1 >= pd2)
{
  console.log("Player 1 wins");
  document.querySelector("h1").textContent = "Player 1 wins";
  document.querySelector(".dice img").getAttribute("src", "img\dice5.png");
}

else
{
  console.log("Player2 wins");
    document.querySelector("h1").textContent = "Player 2 wins";
}
