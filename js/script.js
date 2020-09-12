/* constants */

/* selected page elements */

// information area : variable to hold the output information
const informationArea = document.querySelector('.information') ;
// question area : variable to hold the output question
const questionArea = document.querySelector('.question') ;
// next button ! varaible to hold the next button
const nextButton = document.querySelector('.next-button') ;

/* global object */

// quiz : global object to hold the quiz data
const quiz = {} ;

/* eventListeners */

// onClick, it creates the new question
nextButton.addEventListener('click', createQuestion) ;

// create question
function createQuestion() {
  // the next button disappears
  nextButton.style.display = "none" ;

}

