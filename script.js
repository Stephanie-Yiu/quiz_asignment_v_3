class colorHunt {
  constructor(
    textColor,
    borderColor,
    divBgColor,
    bodyBgColor,
  ) {
    this.textColor = textColor;
    this.borderColor = borderColor;
    this.divBgColor = divBgColor;
    this.bodyBgColor = bodyBgColor;
  }
}
colorPalette = [];
// colorPalette.push(
//   new colorHunt('#', '#', '#', '#'),
// );
colorPalette.push(
  new colorHunt(
    '#6096B4',
    '#93BFCF',
    '#BDCDD6',
    '#EEE9DA',
  ), //blue
);

colorPalette.push(
  new colorHunt(
    '#645CBB',
    '#A084DC',
    '#BFACE2',
    '#EBC7E6',
  ),
);

colorPalette.push(
  new colorHunt(
    '#B9F3E4',
    '#EA8FEA',
    '#FFAACF',
    '#F6E6C2',
  ),
);

colorPalette.push(
  new colorHunt(
    '#FD8A8A',
    '#F1F7B5',
    '#A8D1D1',
    '#9EA1D4',
  ),
);

colorPalette.push(
  new colorHunt(
    '#65647C',
    '#8B7E74',
    '#C7BCA1',
    '#F1D3B3',
  ),
);

colorPalette.push(
  new colorHunt(
    '#594545',
    '#815B5B',
    '#9E7676',
    '#FFF8EA',
  ),
);

colorPalette.push(
  new colorHunt(
    '#554994',
    '#F675A8',
    '#F29393',
    '#FFCCB3',
  ),
);

colorPalette.push(
  new colorHunt(
    '#576F72',
    '#7D9D9C',
    '#E4DCCF',
    '#F0EBE3',
  ),
);

colorPalette.push(
  new colorHunt(
    '#400E32',
    '#A61F69',
    '#F2921D',
    '#F2CD5C',
  ),
);
colorPalette.push(
  new colorHunt(
    '#20262E',
    '#913175',
    '#CD5888',
    '#E9E8E8',
  ),
);
colorPalette.push(
  new colorHunt(
    '#5D3891',
    '#F99417',
    '#E8E2E2',
    '#F5F5F5',
  ),
);
colorPalette.push(
  new colorHunt(
    '#820000',
    '#4E6C50',
    '#F2DEBA',
    '#FAECD6',
  ),
);
colorPalette.push(
  new colorHunt(
    '#121212',
    '#30475E',
    '#F05454',
    '#F5F5F5',
  ),
);

// questionList = [];

// class question {
//   constructor(
//     question,
//     type,
//     answer,
//     correctAnswer,
//   ) {
//     this.question = question;
//     this.type = type;
//     this.answer = answer;
//     this.correctAnswer = correctAnswer;
//   }
// }
// questionList.push(question());

// questionList.push(question());

const startBtn =
  document.querySelector('#startBtn');

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(
      Math.random() * currentIndex,
    );
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
shuffle(colorPalette);
let usedColor = [];
// textColor,
// borderColor,
// divBgColor,
// bodyBgColor,
function applyColor(element) {
  document.body.style.backgroundColor =
    colorPalette[0].bodyBgColor;
  element.style.backgroundColor =
    colorPalette[0].divBgColor;
  element.style.borderColor =
    colorPalette[0].borderColor;
  document.body.style.color =
    colorPalette[0].textColor;

  element.style.color = colorPalette[0].textColor;
  usedColor.push(colorPalette.shift());
}

startBtn.addEventListener(
  'click',
  applyColor(startBtn),
);

const nameDiv =
  document.querySelector('#nameDiv');

const showName =
  document.querySelector('#showName');

const inputName =
  document.getElementById('inputName');

function askName() {
  if (
    inputName.value.length < 0 ||
    inputName.value == ''
  ) {
    alert('Please enter your name !!!');
  }

  if (inputName.value.length > 0) {
    alert('Welcome ' + inputName.value);
    showName.innerHTML = `Hello ${inputName.value}`;
    nameDiv.classList.add('hide');
    showQuestion();
  }
}

startBtn.addEventListener('click', askName);

class questions {
  constructor(
    number,
    question,
    type,
    answer,
    corrAnswer,
  ) {
    this.number = number;
    this.question = question;
    this.type = type;
    this.answer = answer;
    this.corrAnswer = corrAnswer;
  }
}

questionList = [];
questionList.push(
  new questions(
    '1',
    'Which one below is a stone friut',
    'mc',
    ['apple', 'strawberry', 'grape', 'dill'],
    'apple',
  ),
);

questionList.push(
  new questions(
    '2',
    'There are white color strawberries',
    't/f',
    ['True', 'False'],
    'True',
  ),
);

questionList.push(
  new questions(
    '3',
    'how to spell &#10084 <input class=" d-block answeInputBox" type="text id="ans1">  <br> How to spell  &#127822  <input <input class="answeInputBox d-block" type="text id="ans1">  <br> ',
    'fillInBlanks',
    ['heart', 'apple'],
    ['heart', 'apple'],
  ),
);

questionList.push(
  new questions(
    '4',
    'Which one below is a red in color',
    'mc',
    ['apple', 'blueberries', 'grass', 'your mum'],
    'apple',
  ),
);

const question_box = document.querySelector(
  '#question_box',
);
const score_box_name = document.querySelector(
  '#score_box_name',
);
const scoreNumber = document.querySelector(
  '#scoreNumber',
);
let score = 0;

let randomQ = shuffle(questionList);

function showQuestion() {
  score_box_name.innerHTML = `${inputName.value}`;
  scoreNumber.innerHTML = `${score}/ ${questionList.length}`;
let currentQuestion= randomQ[0];




}
