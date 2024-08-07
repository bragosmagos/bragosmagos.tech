const questions = {
    "1": {"question":"How much soda is there in a standard soda bottle?", "answer":"ml"},
    "2": {"question":"What is the speed limit on the Autobahn?", "answer":"km/h"},
    "3": {"question":"How dense is the sun?", "answer":"kg/m3"},
    "4": {"question":"What is the airspeed of an african swallow?", "answer":"m/s"},
    "5": {"question":"What is the airspeed of an european swallow?", "answer":"m/s"},
    "6": {"question":"How much air pressure is there at sea level?", "answer":"bar"},
    "7": {"question":"How much torque does the Toyota Prius's engine produce?", "answer":"nm"},
    "8": {"question":"How thick is this nylon stocking?", "answer":"denier"}
}
const dropdown = document.getElementById("dropdown");
let currentAnswer = "";
function newQuestion() {
    const questionArray = Object.values(questions);
    const randInt = Math.round(Math.random() * (questionArray.length - 1));
    const questionElement = document.getElementById("question");
    const question= document.createTextNode(questionArray[randInt].question);
    currentAnswer = questionArray[randInt].answer;
    questionElement.replaceChildren(question);
}

function winThing() {
    window.location.replace("./win.html");
}

function loseThing() {
    window.location.replace("./lose.html");
}
function checkAnswer() {
    if (currentAnswer === dropdown.value) {
        console.log("YAY");
        winThing();
    }
    else {
        console.log("NAY")
        loseThing();
    }
}

document.getElementById("submit").addEventListener("click", checkAnswer);
newQuestion();


