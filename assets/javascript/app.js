var number = 10;
var intervalId;
var raCounter = 0;
var waCounter = 0;
var uaCounter = 0;
var clockRunning = false;
var rightAnswer = false;

function run() {
    if (!clockRunning) {
    // clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    }
  }
  //  The decrement function.
  function decrement() {
    //  Decrease number by one.
    if(number > 0){
        number--;
    }
    //  Show the number in the #show-number tag.
    $(".show-timer").html("<h3> Time Remaining: " + number + "</h3>");
    //  Once number hits zero...
    if (number === 0) {
      stop();
      uaCounter ++;
    //   reset();
      showAnswer();
    }
  }

  //  The stop function
  function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    clockRunning = false;
    number = 10;
  }

var questions = [
    { question: "How many legs does a spider have?",
      answer:"Eight",
      choice: ["Ten","Eight","Five","Six"],
    },
    { question: "What is the name of the pirate in Peter Pan?",
      answer: "Captain Hook",
      choice: ["Captain Hook", "Captain Cook", "Captain Jim", "Captain Joe"],
    },
    { question: "How many rings make up the symbol of the Olympic Games?",
      answer: "Five",
      choice: ["Six","Five","Four","Three"],
    }
];         
           
var cList =$(".answer-block");
// var p = $('<p>');
function answerOption(value) {
        console.log("for loop" +value);
        var p = $('<p>')
            //another way to do is p.attr("class","list");
            .addClass('list')
            .addClass('text-center')
            .text(value)
            .appendTo(cList);
};

// We start the game with a score of 0.
var score = 0;
// Variable to hold the index of current question.
var questionIndex = 0;

// FUNCTIONS
// ==============================================================================

// Function to render questions.
function renderQuestion() {
  // If there are still more questions, render the next one.
  $("#start").hide();
  $("#restart").hide();
  $(".answer-block").empty();
//   console.log("index " + questionIndex);
//   console.log("ques len " + questions.length);
  if (questionIndex <= (questions.length - 1)) {
        $(".question-block").html('<p class = "question">' +questions[questionIndex].question + '</p>');
        questions[questionIndex].choice.forEach(answerOption);
        // questionIndex ++;
        run();
  }else{
     questionIndex=0;
      showStats();    
  }
}

// function reset(){
//     $(".list").remove();
// }

function resetAll(){
    $(".quesiton-block").empty();
    $(".answer-block").empty();
    waCounter = 0;
    uaCounter = 0;
    raCounter = 0;
    renderQuestion();
}

function showAnswer(){
    $(".list").remove();
    $(".show-timer").empty();
    if(!rightAnswer){
        $(".answer-block").html("<p class ='showAns'> Right Answer is: " +questions[questionIndex].answer+ "<p>");

    }else{
        $(".answer-block").html("<p class ='showAns'> You Got Right Answer: " +questions[questionIndex].answer+ "<p>");

    }
        questionIndex ++;
        setTimeout(renderQuestion,3000);
        rightAnswer = false;
}

function showStats(){
    $(".question").empty();
    $(".show-timer").empty();
    $(".question-block").html("<h3> Game Over below is you Score Details</h3>");
    $(".answer-block").html("<p> Total Questions: " +questions.length+ "<p>");
    $(".answer-block").append("<p> Right answer: " +raCounter+ "</p>");
    $(".answer-block").append("<p> Wrong Answer Count: " + waCounter +"</p>");
    $(".answer-block").append("<p> Unanswered Count: " + uaCounter + "</p>" );
    $("#restart").show();
};

$(document).on('click','.list',answerClick);


function answerClick(){
    var input = $(this).text();
    var ans = questions[questionIndex].answer
    if(input.trim() == ans.trim()){
        stop();
        raCounter ++;
        // reset();
        rightAnswer = true;
        showAnswer();    
    }else{
        stop();
        waCounter ++;
        // reset();
        rightAnswer = false;
        showAnswer();
    }
};

$("#restart").hide();
$("#start").click(renderQuestion);
$("#restart").click(resetAll);