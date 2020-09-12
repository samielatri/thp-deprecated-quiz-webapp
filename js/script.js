/* constants */

/* selected page elements */

// information area : variable to hold the output information
const informationArea = document.querySelector('.information') ;
console.log(informationArea) ;
// question area : variable to hold the output question
const questionArea = document.querySelector('.question') ;
console.log(questionArea) ;
// next button ! varaible to hold the next button
const nextButton = document.querySelector('.next-button') ;
console.log(nextButton) ;
/* questionURL object */

// question url to connect to
const questionUrl = 'https://script.google.com/macros/s/AKfycbxRgyvagg_MhCRSqDZnnzNDybLO9u92-Q-RGtG_Yp-Gx8MSMGcJ/exec' ;

/* global object */

// quiz : global object to hold the quiz data
const quiz = {} ;

/* eventListeners */

// onClick, it creates the new question
nextButton.addEventListener('click', createQuestion) ;

fetch(questionUrl).then(function(questionResult) {
  // return questionUrl in json format
  return questionResult.json() ;
}).then(function(question){
  // print the questionResult in json format in console to verify that it is loaded
  console.log(question.data) ;
  //
  quiz.total = question.data.length ;
  //
  quiz.val = 0 ;
  //
  quiz.score = 0 ;
  //
  quiz.arr = question.data ;
  //
  question.data.forEach(function(el) {
    console.log(el) ;
  })
  createQuestion() ;
}) ;

// create question
function createQuestion() {
  // the next button disappears
  nextButton.style.display = "none" ;

}

