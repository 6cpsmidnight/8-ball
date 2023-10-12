const inputFormEl = document.getElementById("inputForm");
const inputEl = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");

input.addEventListener("keyup", () => {
  if (input.value.length > 0) {
    submitBtn.classList.remove("nonexistent");
    eightBallEl.offsetTop = eightBallOffsetTop;
  } else {
    submitBtn.classList.add("nonexistent");
    eightBallEl.offsetTop = eightBallOffsetTop;
  }
});

const eightBallEl = document.createElement("div");
eightBallEl.setAttribute("id", "eightBall");
// eightBallEl.style.marginTop = submitBtnHeight + "px";
console.log(eightBallEl.style.marginTop);
document.querySelector("body").appendChild(eightBallEl);

const eightBallOffsetTop = eightBallEl.offsetTop + "px";

const eightBallAnswerEl = document.createElement("p");
eightBallAnswerEl.setAttribute("id", "eightBallAnswer");
eightBallEl.offsetTop = eightBallOffsetTop;

submitBtn.classList.add("nonexistent");

let randInt;
const eightBallAnswers = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  ,
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  ,
  "Don’t count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no",
];

inputFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  randInt = Math.floor(Math.random() * 21);
  eightBallAnswerEl.textContent = eightBallAnswers[randInt];
});
