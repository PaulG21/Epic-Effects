// bubbly-button

let animateButton = function (e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

let bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


// card flip

const revealButtons = document.querySelectorAll(".reveal-button");
const hideButtons = document.querySelectorAll(".hide-button");

revealButtons.forEach(revealButton =>
  revealButton.addEventListener("click", (e) => {
  const card = e.target.parentElement.parentElement;
  card.style.transform = "rotateY(180deg)";
}));

hideButtons.forEach(hideButton => 
  hideButton.addEventListener("click", (e) => {
    const cardHide = e.target.parentElement.parentElement;
    cardHide.style.transform = "rotateY(0deg)";
}));


// splash page scroll up effect

const scrollArrows = document.querySelector(".arrows");
const splashPage = document.querySelector(".splash-page");

scrollArrows.addEventListener("click", () => {
  splashPage.style.transform ="translateY(-100%)"
})



// Logo length algorithm 

// const logo = document.querySelectorAll("#logo path");
// for(let i = 0; i<logo.length; i++){
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
// };
