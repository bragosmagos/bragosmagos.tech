const questions = {
    "1": {"question":"How much soda is there in a standard soda bottle?", "answer":"ml"},
    "2": {"question":"What is the speed limit on the Autobahn?", "answer":"km/h"},
    "3": {"question":"How dense is the sun?", "answer":"kg/m3"},
    "4": {"question":"What is the airspeed of an african swallow?", "answer":"m/s"},
    "5": {"question":"What is the airspeed of an european swallow?", "answer":"m/s"},
    "6": {"question":"How much air pressure is there at sea level?", "answer":"bar"},
    "7": {"question":"How much torque does the Toyota Prius's engine produce?", "answer":"Newtonmeter"},
    "8": {"question":"How thick is this nylon stocking?", "answer":"denier"},
    "9": {"question":"How long is a standard football field?", "answer":"m"},
    "10": {"question":"What is the length of the X axis on this 3D printer?", "answer":"mm"},
    "11": {"question":"How much water is there in a olympic swimming pool?", "answer":"l"},
    "12": {"question":"What is the polling rate of this mouse?", "answer":"dpi"},
    "13": {"question":"How much computing power can this PC produce?", "answer":"flop"},
    "14": {"question":"How much caffeine is there in this energy Drink?", "answer":"mg"},
    "15": {"question":"What is the size of this transistor?", "answer":"nm"},
    "16": {"question":"How much energy is in this meal?", "answer":"kcal"},
    "17": {"question":"How long is it between the two spawn points in Team Fortress 2's most popular map?", "answer":"hammer"},
    "18": {"question":"How tall is this horse?", "answer":"hand"},
    "19": {"question":"What was the distance difference between the 1st and 2nd place in this horse race at the time of the 1st crossing the finish line?", "answer":"horse"},
    "20": {"question":"What was the difference between the victor and 2nd place in this years Oxford and Cambridge Boat Race?", "answer":"boat length"},
    "21": {"question":"How far is it between these two apartments in Manhattan?", "answer":"block"},
    "22": {"question":"How long was Noah's Ark?", "answer":"cubit"},
    "23": {"question":"What is the cross-sectional area of this Nucleus?", "answer":"barn"},
    "24": {"question":"What is the area to be plastered?", "answer":"brass"},
    "25": {"question":"What is the size of this field?", "answer":"acre"},
    "26": {"question":"How much liqour did he consume?", "answer":"shot"},
    "27": {"question":"How much pulpwood do you have?", "answer":"cord"},
    "28": {"question":"How big is this extrasolar planet?", "answer":"jupiter"},
    "29": {"question":"How long will this interrupt take?", "answer":"jiffy"},
    "30": {"question":"How long did it take before oceans appeared on earth?", "answer":"GY"},
    "31": {"question":"What should the rotation of the crankshaft be?", "answer":"brad"},
    "32": {"question":"How big was this explosion?", "answer":"TNT tons"},
    "33": {"question":"How much energy is used worldwide per day?", "answer":"quad"},
    "34": {"question":"How much shielding does this reactor have?", "answer":"mwe"},
    "35": {"question":"What's the size of the CD-Rom?", "answer":"bible"},
    "36": {"question":"How long is this program?", "answer":"kloc"},
    "37": {"question":"How long did that operation take?", "answer":"tick"},
    "38": {"question":"How valuable is that chess position?", "answer":"centipawn"},
    "39": {"question":"How spacesick did you get?", "answer":"garn"},
    "40": {"question":"How hot was the pepper?", "answer":"scoville"}
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


