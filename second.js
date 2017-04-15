function readBody(xhr) {
    var data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
}//readBody
var questionBank=new Array();
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        var data=xhr.responseText;
        var jsonResponse = JSON.parse(data);
        //document.getElementById("navContent").innerHTML = jsonResponse.questionAnswer;
   for(i=0;i<jsonResponse.questionAnswer.length;i++){ 
            questionBank[i]=new Array;
            questionBank[i][0]=jsonResponse.questionAnswer[i].question;
            questionBank[i][1]=jsonResponse.questionAnswer[i].option1;
            questionBank[i][2]=jsonResponse.questionAnswer[i].option2;
            questionBank[i][3]=jsonResponse.questionAnswer[i].option3;
            questionBank[i][4]=jsonResponse.questionAnswer[i].option4;
            questionBank[i][5]=jsonResponse.questionAnswer[i].option5;
        }
        var numberOfQuestions=questionBank.length; 

   }
}//onreadystatechange
xhr.open('GET', 'http://webtek2017/questionnaire.json', true);
xhr.send(null);

Object.defineProperty(this, 'onreadystatechange', {
  get: function() { return xhr.onreadystatechange; },
 // set: function(value) { xhr.onreadystatechange = value; },
  enumerable: true,
  configurable: true
});