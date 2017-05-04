var questionNumber=0;
var questionBank=new Array();
var stage2=new Object;
var questionLock=false;
var choice1 =0;
var choice2 =0;
var choice3 =0;
var choice4 =0;
var choice5 =0;
var numberOfQuestions;
var all;
var data=[];
var feedback = [];


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        var data=xhr.responseText;
        var jsonResponse = JSON.parse(data);

   for(i=0;i<jsonResponse.questionAnswer.length;i++){ 
            questionBank[i]=new Array;
            questionBank[i][0]=jsonResponse.questionAnswer[i].question;
            questionBank[i][1]=jsonResponse.questionAnswer[i].option1;
            questionBank[i][2]=jsonResponse.questionAnswer[i].option2;
            questionBank[i][3]=jsonResponse.questionAnswer[i].option3;
            questionBank[i][4]=jsonResponse.questionAnswer[i].option4;
            questionBank[i][5]=jsonResponse.questionAnswer[i].option5;
            }
        numberOfQuestions=questionBank.length; 
        displayQuestion();
   }
}//onreadystatechange

function displayQuestion(){

        var ques = questionBank[questionNumber][0];
        var q1=questionBank[questionNumber][1];
        var q2=questionBank[questionNumber][2];
        var q3=questionBank[questionNumber][3];
        var q4=questionBank[questionNumber][4];
        var q5=questionBank[questionNumber][5];

    document.getElementById('que').innerHTML = ques;
    document.getElementById('1').innerHTML = q1;
    document.getElementById('2').innerHTML = q2;
    document.getElementById('3').innerHTML = q3;
    document.getElementById('4').innerHTML = q4;
    document.getElementById('5').innerHTML = q5;
    document.getElementById('1').addEventListener("click", choice);
    document.getElementById('2').addEventListener("click", choice);
    document.getElementById('3').addEventListener("click", choice);
    document.getElementById('4').addEventListener("click", choice);
    document.getElementById('5').addEventListener("click", choice);
    //var choice = document.getElementsByClassName("option");
        function choice(){

            if(questionLock==false){
   
                if(this.id==1){
                    feedback.push("question:" + ques);
                    feedback.push("answer:" + q1);
                    changeQuestion();
                }
                if(this.id==2){
                    feedback.push("question:" + ques);
                    changeQuestion();
                    feedback.push("answer:" + q2);
                }
                if(this.id==3){
                    feedback.push("question:" + ques);
                    changeQuestion();
                    feedback.push("answer:" + q3);
                }
                if(this.id==4){
                    feedback.push("question:" + ques);
                    changeQuestion();
                    feedback.push("answer:" + q4);  
                }
                if(this.id==5){
                    feedback.push("question:" + ques);
                    changeQuestion();
                    feedback.push("answer:" + q5); 
                }

            }} //choice
}//display 

    function changeQuestion(){
        questionNumber++;

    if(questionNumber<numberOfQuestions){displayQuestion();}
    else{displayFinalSlide();}

    }//change question

    function displayFinalSlide() {
        document.getElementById('que').style.display = "none";
        document.getElementById('1').style.display = "none";
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
        document.getElementById('5').style.display = "none";
        document.getElementById('message').innerHTML = 'Your evaluation has been saved, Thank You for for cooperation! Have a nice day!';

        var xr = new XMLHttpRequest();
        xr.open("POST", "http://webtek2017/mp2/home.json", true);
        xr.setRequestHeader("Content-Type", "application/json");
        if (xr.readyState == 4 && xr.status == 200) {
        var json = JSON.parse(xr.responseText);
}
        var result = JSON.stringify(feedback);
        xr.send(result);
        console.log("JSON FILE SENT");


    } //displayFinalSlide

//fetching of json file from server
xhr.open('GET', 'http://webtek2017/questionnaire.json', true);
xhr.send(data);

Object.defineProperty(this, 'onreadystatechange', {
  get: function() { return xhr.onreadystatechange; },
  set: function(value) { xhr.onreadystatechange = value; },
  enumerable: true,
  configurable: true
});

window.onload = function() {
    var appCache = window.applicationCache;

switch (appCache.status) {
  case appCache.UNCACHED: // UNCACHED == 0
    return 'UNCACHED';
    break;
  case appCache.IDLE: // IDLE == 1
    return 'IDLE';
    break;
  case appCache.CHECKING: // CHECKING == 2
    return 'CHECKING';
    break;
  case appCache.DOWNLOADING: // DOWNLOADING == 3
    return 'DOWNLOADING';
    break;
  case appCache.UPDATEREADY:  // UPDATEREADY == 4
    return 'UPDATEREADY';
    break;
  case appCache.OBSOLETE: // OBSOLETE == 5
    return 'OBSOLETE';
    break;
  default:
    return 'UKNOWN CACHE STATUS';
    break;
};

appCache.update(); // Attempt to update the user's cache.

if (appCache.status == window.applicationCache.UPDATEREADY) {
  appCache.swapCache();  // The fetch was successful, swap in the new cache.
}

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);



}