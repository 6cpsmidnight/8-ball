const inputFormEl = document.getElementById("inputForm");
const inputEl = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");

input.value = "";
submitBtn.disabled = true;

let sampleQuestionsSelIndex = 0;
const sampleQuestions = [
  "Do my parents love me?",
  "Am I adopted?",
  "Will I ever be good enough?",
  "Will the pain ever end?",
  "Will I ever stop crying myself to sleep?",
];

input.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    input.value = sampleQuestions[sampleQuestionsSelIndex];
    sampleQuestionsSelIndex < 4
      ? sampleQuestionsSelIndex++
      : (sampleQuestionsSelIndex = 0);
  }
});

input.addEventListener("keyup", () => {
  if (input.value.length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const eightBallEl = document.createElement("div");
eightBallEl.setAttribute("id", "eightBall");
document.querySelector("body").appendChild(eightBallEl);

const eightBallAnswerEl = document.createElement("p");
eightBallAnswerEl.setAttribute("id", "eightBallAnswer");
eightBallAnswerEl.textContent = "8";
eightBallEl.appendChild(eightBallAnswerEl);

inputFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  eightBallAnswer();
});

eightBallEl.addEventListener("click", eightBallAnswer);

let randInt;
const eightBallAnswers = [
  // Positive answers
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
  // Uncertain answers
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  // Negative answers
  "Don’t count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no",
];

function eightBallAnswer() {
  randInt = Math.floor(Math.random() * 20);
  eightBallAnswerEl.textContent = eightBallAnswers[randInt];
  eightBallAnswerEl.style.fontSize = "var(--answer-font-size)";
}
