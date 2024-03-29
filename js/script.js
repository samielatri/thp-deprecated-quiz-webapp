/* constants */

/* selected page elements */

// information area : variable to hold the questionArea information
const informationArea = document.querySelector('.information') ;
console.log(informationArea) ;
// question area : variable to hold the questionArea question
const questionArea = document.querySelector('.question') ;
console.log(questionArea) ;
// next button : variable to hold the next button
const nextButton = document.querySelector('.next-button') ;
console.log(nextButton) ;



/* global object */

// quiz : global object to hold the quiz data
const quiz = {} ;

/* added page element */

// main content to replace after load content of questionArea
const main = document.createElement('div') ;

/* main */

// onClick, it creates the new question
nextButton.addEventListener('click', createQuestion) ;

fetch(questionUrl).then(function(questionResult) {
  // return questionUrl in json format
  return questionResult.json() ;
}).then(function(question){
  // print the questionResult in json format in console to verify that it is loaded
  console.log(question.data) ;
  // total number of questions
  quiz.total = question.data.length ; // JSON data for the quiz
  // current question
  quiz.value = 0 ;
  // score
  quiz.score = 0 ;
  // array
  quiz.array = question.data ;
  // console log
  question.data.forEach(function(element) {
    console.log(element) ;
  })
  // create question
  createQuestion() ;
}) ;

// create question
function createQuestion() {
  // end quiz
  if(quiz.value+1 > quiz.total) {
    informationArea.textContent = 'Score: ' + quiz.score + ' sur ' + quiz.total ; // display score
    questionArea.textContent = "Quiz terminé !" ; // indicates that the quiz ended
    nextButton.style.display = "none" ; // button disappears
  // continue quiz
  } else {
    // the next button disappears
    nextButton.style.display = "none" ;
    // indicate current question out of total questions in french for user
    informationArea.textContent = "Question nº" + (quiz.value + 1) + " sur " + quiz.total ;
    // clear HTML in the questionArea
    questionArea.innerHTML = "" ;
    // Console log to see all quiz data
    console.log(quiz) ;
    // current question data
    let questions = quiz.array[quiz.value] ;
    // current question console log
    console.log(questions) ;
    // content of main replacing questionArea
    main.textContent = questions.question ;
    main.classList.add('question') ;
    questionArea.appendChild(main) ;
    // randomize options 
    arrayRandom(questions.option) ;
    // extract all options from option array 
    questions.option.forEach(function(element) {
      // console log for current element (option)
      console.log(element) ;
      // add spanElement with style to represent the option in the questionArea
      let spanElement = document.createElement('span') ;
      spanElement.textContent = element ;
      // add class style to spanElement
      spanElement.classList.add('answer') ; // apply answer style 
      spanElement.classList.add('btn') ; // apply button style added
      questionArea.appendChild(spanElement) ;
	  let breakElement = document.createElement('br') ;
	  questionArea.appendChild(breakElement) ;
      spanElement.answer = questions.answer ;
      // addEventListener of click on spanElement to check the option with checker function
      spanElement.addEventListener('click', checker) ;
    })
  }
}

// randomize array
function arrayRandom(arr) {
  arr.sort(function() {
    return .5 - Math.random() ;
  })
}

// check the selected option
function checker(element) {
  // console log for current selected option
  console.log(element.target) ;
  console.log(this) ; // this refers to questions
  // console log the correct answer
  console.log(element.target.answer) ;
  console.log(this.answer) ; // this refers to questions.answer

  // all answer elements
  const allAnswers = document.querySelectorAll('.answer') ; // const need to be defined here
  // no more clickable answers/options
  allAnswers.forEach(function(element1){
    element1.classList.remove('answer') ; // remove answer class
    element1.style.color = '#ddd' ; // mute color
    // no more effect on click
    element1.removeEventListener('click', checker) ;
  })

  let selectedOption = element.target ; 
  console.log(selectedOption.textContent) ;
  // correct answer
  if(selectedOption.textContent == selectedOption.answer) {
    console.log('correct answer') ;
    selectedOption.style.color = 'green' ; // turns green
    nextButton.textContent = "Bien joué ! Clique ici pour passer à la question suivante." ;
    // increment score
    quiz.score ++ ;
  } else { // wrong answer
    selectedOption.style.color = 'red' ; // turns red
    console.log('wrong answer') ;
    nextButton.textContent = "Mauvaise réponse ! Clique ici pour passer à la question suivante."
  }

  // move to the next question of quiz
  quiz.value ++ ;
  // nextButton appears
  nextButton.style.display = "block" ;
}
