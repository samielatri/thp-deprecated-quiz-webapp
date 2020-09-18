function doGet(e){
  // spreadsheet
  var spreadsheet = SpreadsheetApp.openById('put_the_stylesheet_id_here') ;
  // first spreadsheet
  var sheet = spreadsheet.getSheets()[0] ;
  // first spreadsheet's content
  var rows = sheet.getDataRange().getValues() ;
  // display first spreadsheet's content in logger
  Logger.log(rows) ;
  // questions content
  var questions = rows.slice(1) ; // ignore first row that describe columns content
  // result array
  var result = [] ;
  // parse questions to extract questionData and organize it in a structured way: question, answer and optionion
  for (var questionData of questions) {
    // temporary object that will hold the data of question
    var temp = {} ;
    // question data
    temp.question = questionData[0] ;
    // answer data
    temp.answer = questionData[1] ;
    // option data : array of options
    temp.option = [] ;
    // parse questionData to extract options and add it to option data (the array of options)
    for (var x = 1 ; x < questionData.length  ; x ++) {
      if(questionData[x].length > 0) {
        // add questionData to option data (the array of options)
        temp.option.push(questionData[x]) ;
      }
    }
    // add the the data of question to the result
    result.push(temp) ;
 }
 // output : JSON object, formatted result to JSON format
 var output = JSON.stringify({status:'succespreadsheet',data:result}) ;
 // return the output (JSON object)
    return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON) ;
}
