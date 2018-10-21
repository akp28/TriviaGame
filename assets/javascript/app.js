var number = 10;
var intervalId;
var raCounter = 0;
var waCounter = 0;
var clockRunning = false;

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
    $(".show-timer").html("<h1> Time Remaining: " + number + "</h1>");


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
      questionIndex ++;
      waCounter ++;
      renderQuestion();
    //   run();
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

  //  Execute the run function.
//   run();

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
              
              
var cList =$("ul.answers");

function answerOption(value) {
        var li = $('<li/>')
            .addClass('list')
            .appendTo(cList);
        var aaa = $('<a/>')
            .text(value)
            .appendTo(li);
    // console.log(value);
}

// We start the game with a score of 0.
var score = 0;
// Variable to hold the index of current question.
var questionIndex = 0;

// FUNCTIONS
// ==============================================================================

// Function to render questions.
function renderQuestion() {
  // If there are still more questions, render the next one.
  console.log("index " + questionIndex);
//  var len = questions.length;
  console.log("ques len " + questions.length);
  if (questionIndex <= (questions.length - 1)) {
    run();
    if (questionIndex === 0){
        console.log("if");
        $(".question").html(questions[questionIndex].question);
        questions[questionIndex].choice.forEach(answerOption);
    }else if (questionIndex === 1){
        $(".question").html(questions[questionIndex].question);
        $(".answers").empty();
        questions[questionIndex].choice.forEach(answerOption);
    }else if (questionIndex === 2){
        $(".question").html(questions[questionIndex].question);
        $(".answers").empty();
        questions[questionIndex].choice.forEach(answerOption);
    }
    
  }else{
      alert ("Game Over");
      showStats();    
  }
}

function showStats(){
    $(".question-block").empty();
    // $("ul").empty();
    $("show-timer").empty();
    var totalQuestions = questions.length;
    $(".finalScore").html("You Got " +raCounter+ " correct of total " +totalQuestions +  " questions ")
};

$(document).on('click','.list',answerClick);


function answerClick(){
        var input = $(this).text();
        // console.log("click " + input);
        var ans = questions[questionIndex].answer
        // console.log("answers " + ans);
        if(input.trim() == ans.trim()){
            console.log("true");
            // alert("correct answer");
            stop();
            raCounter ++;
            questionIndex ++;
            $(".list").text(" ");
            // $("ul").html("You selected choice is Right!!");
            $("ul").append("<li>You selected choice is Right!! </li>");  
            renderQuestion();
            // run();
        }else{
            // console.log("false");
            // alert("wrong answer. " + ans + " is right answer");
            stop();
            waCounter ++;
            questionIndex ++;
            $("ul").append("<li>You selected choice is Wrong!! </li>");
            renderQuestion();
            // return;
        }
};


renderQuestion();
// showStats();
// score();
//  run();