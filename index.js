var randomNumber1 = Math.ceil(Math.random()*6);
var randomImage = "images/dice"+randomNumber1+".png";
document.querySelector("img").setAttribute("src",randomImage);

var randomNumber2 = Math.ceil(Math.random()*6);
var randomImage2 = "images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",randomImage2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}else{
  document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
