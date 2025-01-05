const quizData = [
  {
    question: "What is color of sky where is no clouds?",
    options: ["Oreange", "Green", "Yellow", "Skyblue"],
    correct: 3,
  },
  {
    question: "How many days are there in a week??",
    options: [4, 7, 51, 5],
    correct: 1,
  },
  {
    question: "Rainbow consist of how many colours?",
    options: [6, 9, 7, 8],
    correct: 2,
  },
  {
    question: "Name the National animal of India?",
    options: ["Tiger", "Lion", "Elephent", "Dog"],
    correct: 0,
  },
  {
    question: " Name the biggest continent in the world?",
    options: ["North America", "Rasia", "Asia", "Australia"],
    correct: 2,
  },
];

//javascript Initialization
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

//load the quiz question

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  //   console.log(question);
  //   console.log(options);

  questionElm.innerHTML = `${currentQuiz + 1} . ${question}`;
  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerHTML = curOption)
  );
};

loadQuiz();
// get selected answer Function on button click

const getSelected = () => {
  //   let ans_index ;
  //   answerElm.forEach((curOption, index) => {
  //     if (curOption.checked) {
  //       ans_index = index;
  //     }
  //   });
  //   return ans_index;

  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElm, index) => curElm.checked);
};

//deselectedAnswer
const deselectedAnswer = () => {
  return answerElm.forEach((curElm) => (curElm.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelected();
  //   console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score++;
    console.log(score);
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  } else {
    quiz.innerHTML = `<div class="quiz">
      <h2 class="question"> Your Score :${score}/ ${quizData.length} Correct Answers</h2>
      <p style="margin:0 1.5rem">Congretulations on completing the Quiz</p>
      <div class="btn"><button  onclick="location.reload()">Play Again</button></div>
    </div>`;
  }
});
