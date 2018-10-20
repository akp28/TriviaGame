var number = 10;
var intervalId;
var raCounter = 0;
var waCounter = 0;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
//  Decrease number by one.
    if(number > 0){
        number--;
    }
    
    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + number + "</h2>");
    renderQuestion();
    //  Once number hits zero...
    if (number === 0) {
        //  ...run the stop function.
        // stop();
        //  Alert the user that time is up.
        alert("Time Up!");
        number=10;
    }
}
// function stop() {
//     clearInterval(intervalId,0);
//     console.log(intervalId);
// } 

var questions = [
    { question: "What’s Dory’s very first line in the movie?",
      answer:"Look out",
      choice: ["Look out","Hi I m dory","Just keep swimming","Hey there" ],
      photo: "https://lumiere-a.akamaihd.net/v1/images/q1_doryswimmingtowardscamrea_findingnemo_3dc9f828.jpeg?region=0%2C0%2C1024%2C338" 
    },
    { question: "What color are Dory’s eyes?",
      answer: "Purple",
      choice: ["Blue", "Yellow", "Green", "Purple"],
      photo: "https://lumiere-a.akamaihd.net/v1/images/q2_dorycryingtalkingtomarlin_findingnemo_9690f45a.jpeg?region=0%2C0%2C1024%2C338"
    },
    { question: "What does Dory think this shape is?",
      answer: "clam",
      choice: ["Octopus","clam","Spider","Tuna"],
      photo: "https://lumiere-a.akamaihd.net/v1/images/q6_fishmakingoctopussign_findingnemo_d61baf9f.jpeg?region=0%2C0%2C1024%2C338"
    }
];

// var ans1 =  ["Look out","Hi I m dory","Just keep swimming","Hey there" ];
// var ans2 = ["Blue", "Yellow", "Green", "purple"];
// var ans3 = ["Octopus","clam","Spider","Tuna"];           
              
              
var cList =$("ul.answers");

function answerOption(value) {
        var li = $('<li/>')
            .addClass('list')
            .appendTo(cList);
        var aaa = $('<a/>')
            .text(value)
            .appendTo(li);
    console.log(value);
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
    // $(".cardbody").empty();
    $("ul").empty();
    $(".finalScore").html("You Got " +raCounter+ " correct of total 3 questions ")
};

$(document).on('click','.list',answerClick);


function answerClick(){
        var input = $(this).text();
        console.log("click " + input);
        var ans = questions[questionIndex].answer
        console.log("answers " + ans);
        if(input.trim() == ans.trim()){
            console.log("true");
            alert("correct answer");
            raCounter ++;
            questionIndex ++;
            renderQuestion();
        }else{
            console.log("false");
            alert("wrong answer. " + ans + " is right answer");
            waCounter ++;
            questionIndex ++;
            renderQuestion();
            // return;
        }
}


renderQuestion();
// showStats();
// score();
// run();