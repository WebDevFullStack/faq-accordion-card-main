// Faq Section

//// add an event listener to each question wrapper
var questionWrapper = document.querySelectorAll(".question-wrapper");
for (var i = 0; i < questionWrapper.length; i++) {
    questionWrapper[i].addEventListener("click", questionClicked);
}

// this function is called when question wrapper is clicked
function questionClicked() {
    var clickedElement = this;
    multipleAnswers(clickedElement);
}

function multipleAnswers(clickedElement) {
    // iterate over each element in the document checking for an "active-question" class
    var allQuestions = document.querySelectorAll(".question-wrapper");
    for (var i = 0; i < allQuestions.length; i++) {
        if (
            allQuestions[i].classList.toString().includes("active-question") &&
            allQuestions[i].classList !== clickedElement.classList
        ) {
            toggleQuestion(allQuestions[i]);
            arrowRotate(allQuestions[i]);
        }
    }
    toggleQuestion(clickedElement);
    arrowRotate(clickedElement);

    //////////
    // if the current iteration has the class "active-question"
    // then close that answer panel, by toggling the "active-question" class on the .question element && toggle
    // "displayed" && "hidden" on the .answer element.
    //
    // then toggle the same classes on the clicked question wrapper to open.
    //
    //
}

function displayAnswer(clickedElement) {
    toggleQuestion(clickedElement);
    arrowRotate(clickedElement);
}

function toggleQuestion(clickedElement) {
    clickedElement.classList.toggle("active-question");

    var answer = clickedElement.querySelector(".answer");
    // answer.classList.toggle("displayed");
    answer.classList.toggle("hidden");
}

function arrowRotate(clickedElement) {
    var arrow = clickedElement.querySelector(".arrow");
    arrow.classList.toggle("rotate-180");
}