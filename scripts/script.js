// Faq Section
//// add an event listener to each question wrapper
////

var questionWrapper = document.querySelectorAll(".question-wrapper");

for (var i = 0; i < questionWrapper.length; i++) {
    questionWrapper[i].addEventListener("click", questionClicked);
}

function questionClicked() {
    var answer = this.querySelector(".answer");
    answer.classList.toggle("displayed");
    answer.classList.toggle("hidden");
}