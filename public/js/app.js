var quizQuestions = [
    {
        num: 1,
        question: "What is Git?",
        Option: {
            a: "A programming language",
            b: "A remote repository platform",
            c: "A nickname for GitHub",
            d: "A version control system",
        },
        answer: "A version control system",
    },
    {
        num: 2,
        question: "HTTP stands for:",
        Option: {
            a: "Hyper-link Text Provider",
            b: "HTML Topic Traffic Pointer",
            c: "Hypertext Transfer Protocol",
            d: "Hyperlink Transit Path",
        },
        answer: "Hypertext Transfer Protocol",
    },
    {
        num: 3,
        question: "What does Client-Side JavaScript and Server-Side JavaScript have in common?",
        Option: {
            a: "Both are run on the server",
            b: "Core JavaScript",
            c: "Both are run on the web browser",
            d: "Client-side additions",
        },
        answer: "Core JavaScript",
    },
    {
        num: 4,
        question: "What is the role of JavaScript in web development?",
        Option: {
            a: "Styles",
            b: "Layout and rendering",
            c: "Actions and functionality",
            d: "Nothing",
        },
        answer: "Actions and functionality",
    },
    {
        num: 5,
        question: "What is the symbol used for logical operator OR?",
        Option: {
            a: "//",
            b: "$$",
            c: "||",
            d: "&&",
        },
        answer: "||",
    },
    {
        num: 6,
        question: "What is the syntax for Javascript Ternary?",
        Option: {
            a: "condition ? exprIfTrue : exprIfFalse",
            b: "expression ? exprIfTrue : exprIfFalse",
            c: "condition ? exprIfFalse : exprIfTrue",
            d: "condition ? exprIfTrue ; exprIfFalse",
        },
        answer: "condition ? exprIfTrue : exprIfFalse",
    },
    {
        num: 7,
        question: "What Is The Resolution Of The Human Eye?",
        Option: {
            a: "576 Megapixels",
            b: "476 Megapixels",
            c: "376 Megapixels",
            d: "276 Megapixels",
        },
        answer: "576 Megapixels",
    },
];

var htmlQuestion = document.getElementById("html-question");
var htmlOptionLists = document.getElementsByClassName("html-option-list");
var nextQueBtn = document.getElementById("next-Que-btn");
var counterValue = document.getElementById("counter-value");
var quizBox = document.getElementById("quiz-box");
var counter = 0;
var score = 0;
var resultValue = document.getElementById("result-value");

function setQuestion() {
    htmlQuestion.innerHTML = quizQuestions[counter].question;
    htmlOptionLists[0].innerHTML = quizQuestions[counter].Option.a;
    htmlOptionLists[1].innerHTML = quizQuestions[counter].Option.b;
    htmlOptionLists[2].innerHTML = quizQuestions[counter].Option.c;
    htmlOptionLists[3].innerHTML = quizQuestions[counter].Option.d;
}

function nextQue() {
    counter++;

    console.log(counter);
    if (counter < quizQuestions.length) {
        setQuestion();
        counterValue.innerHTML = counter + 1 + " / " + quizQuestions.length;
    } else {
        quizBox.style.display = "none";
        resultValue.className = "show";
        resultValue.innerHTML = "Your Score: " + score;
        resultValue.style.color = "#f4f4f4";
        resultValue.parentElement.style.textAlign = "center";
        resultValue.parentElement.style.margin = "240px auto";
    }
    nextQueBtn.className = "hide";

    for (var i = 0; i < htmlOptionLists.length; i++) {
        htmlOptionLists[i].classList.remove("disabled");
        htmlOptionLists[i].style.backgroundColor = "#efefef";
    }
}

function checkAns(element) {
    //   console.log(element.innerHTML == quizQuestions[counter].answer);
    nextQueBtn.className = "show";
    if (element.innerHTML == quizQuestions[counter].answer) {
        score += 10;
        // console.log(score);
        element.style.backgroundColor = "lightgreen";
    } else {
        element.style.backgroundColor = "#ee9090";

        for (var i = 0; i < htmlOptionLists.length; i++) {
            if (htmlOptionLists[i].innerHTML == quizQuestions[counter].answer) {
                htmlOptionLists[i].style.backgroundColor = "lightgreen";
            }
        }
    }
    for (var i = 0; i < htmlOptionLists.length; i++) {
        htmlOptionLists[i].className += " disabled";
    }
}