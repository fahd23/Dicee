const reloadBtn = document.querySelector("#reload");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const heading = document.querySelector("h1");

function generateRandomNumber() {
  return Math.ceil(Math.random() * 6);
}

function showMsg(msg){
  heading.innerText = msg;
}

function generateRandomImage(image){
  return `images/dice${image}.png`;
}

let randomNumber1 = generateRandomNumber();
let randomImage = generateRandomImage(randomNumber1);
img1.setAttribute("src", randomImage);

let randomNumber2 = generateRandomNumber();
let randomImage2 = generateRandomImage(randomNumber2);
img2.setAttribute("src", randomImage2);


if (randomNumber1 > randomNumber2) {
  showMsg ("🚩 Player 1 wins!");
} else if (randomNumber1 === randomNumber2) {
  showMsg ("Draw!");
} else {
  showMsg ("Player 2 wins! 🚩");
}

reloadBtn.addEventListener('click', function clickRefreshHandler() {

  
let randomNumber1 = generateRandomNumber();
let randomImage = generateRandomImage(randomNumber1);
img1.setAttribute("src", randomImage);

let randomNumber2 = generateRandomNumber();
let randomImage2 = generateRandomImage(randomNumber2);
img2.setAttribute("src", randomImage2);


if (randomNumber1 > randomNumber2) {
  showMsg ("🚩 Player 1 wins!");
} else if (randomNumber1 === randomNumber2) {
  showMsg ("Draw!");
} else {
  showMsg ("Player 2 wins! 🚩");
}

});
