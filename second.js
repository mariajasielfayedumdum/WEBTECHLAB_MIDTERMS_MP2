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
var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var choice1 =0;
var choice2 =0;
var choice3 =0;
var choice4 =0;
var choice5 =0;
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
        var numberOfQuestions=questionBank.length; 
        displayQuestion();
   }
}//onreadystatechange

function displayQuestion(){
    var rnd=Math.random()*5;
    rnd=Math.ceil(rnd);
        var q1;
        var q2;
        var q3;
        var q4;
        var q5;

    if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];q5=questionBank[questionNumber][5]}
    if(rnd==2){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];q5=questionBank[questionNumber][5]}
    if(rnd==3){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];q5=questionBank[questionNumber][5]}
    if(rnd==4){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];q5=questionBank[questionNumber][5]}
    if(rnd==5){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];q5=questionBank[questionNumber][5]}
    
    var g = document.getElementById("navContent");
    g.innerHTML +='<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div><div id="4" class="option">'+q4+'</div><div id="5" class="option">'+q5+'</div>';
     
    var opt = document.getElementsByClassName("option");

    opt.onclick = optchoice;
    function optchoice () {
    document.getElementById("navContent").innerHTML = 'Helo';

      if(questionLock==false){
        questionLock=true;    
                document.getElementById("navContent").innerHTML = 'Hello';

            if(this.id==1){
                //  
                choice1++;
                document.getElementById("navContent").innerHTML = 'HI';
        }
            if(this.id==2){
                // 
            choice2++;
        }
            if(this.id==3){
                // 
            choice3++;
        }
            if(this.id==4){
                //  
            choice4++;
        }
        if(this.id==5){
                // 
            choice5++;
        }
        setTimeout(function(){changeQuestion()},1000);
            }  
    };

}//display 

    function changeQuestion(){
        questionNumber++;

        if(g=="#navContent"){
            stage2="#game1";
            stage="#game2";
        }
            else{
                stage2="#game2";
                g="#navContent";
            }
    
        if(questionNumber<numberOfQuestions){
            displayQuestion();
        }
            else{displayFinalSlide();
            }
    
        $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
        $(g).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
    
}  


    function displayFinalSlide(){
        document.getElementById('message').innerHTML = 'Thank You for evaluating! Have a nice day!';
    }

xhr.open('GET', 'http://webtek2017/questionnaire.json', true);
xhr.send(null);

Object.defineProperty(this, 'onreadystatechange', {
  get: function() { return xhr.onreadystatechange; },
 // set: function(value) { xhr.onreadystatechange = value; },
  enumerable: true,
  configurable: true
});
