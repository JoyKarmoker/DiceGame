var pd1, pd2;
pd1 = Math.random() * 6;
pd1 = Math.floor(pd1);
pd1 = pd1 + 1;

pd2 = Math.random() * 6;
pd2 = Math.floor(pd2);
pd2 = pd2 + 1;

if(pd1 > pd2)
{
  console.log("Player 1 wins");
  document.querySelector("h1").textContent = "Player 1 wins";
}

else if(pd2 > pd1)
{
  console.log("Player2 wins");
    document.querySelector("h1").textContent = "Player 2 wins";
}

else
{
  document.querySelector("h1").textContent = "Draw";
}

if(pd1 === 1)
{
  document.querySelector(".dice img").setAttribute("src", "img/dice1.png");
}

else if(pd1 === 2)
{
  document.querySelector(".dice img").setAttribute("src", "img/dice2.png");
}

else if(pd1 === 3)
{
  document.querySelector(".dice img").setAttribute("src", "img/dice3.png");
}

else if(pd1 === 4)
{
  document.querySelector(".dice img").setAttribute("src", "img/dice4.png");
}

else if(pd1 === 5)
{
  document.querySelector(".dice img").setAttribute("src", "img/dice5.png");
}

else if(pd1 === 6)
{
  document.querySelector(".dice img").setAttribute("src", "img/dice6.png");
}


if(pd2 === 1)
{
  document.querySelector(".dice2 img").setAttribute("src", "img/dice1.png");
}

else if(pd2 === 2)
{
  document.querySelector(".dice2 img").setAttribute("src", "img/dice2.png");
}

else if(pd2 === 3)
{
  document.querySelector(".dice2 img").setAttribute("src", "img/dice3.png");
}

else if(pd2 === 4)
{
  document.querySelector(".dice2 img").setAttribute("src", "img/dice4.png");
}

else if(pd2 === 5)
{
  document.querySelector(".dice2 img").setAttribute("src", "img/dice5.png");
}

else if(pd2 === 6)
{
  document.querySelector(".dice2 img").setAttribute("src", "img/dice6.png");
}

