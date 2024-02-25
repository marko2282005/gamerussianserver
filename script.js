let score = 0;

function startGame() {
    var startButton = document.getElementById("startButton");
    startButton.style.display = "none";
    
    document.getElementById("gameIntro").style.display = "block";
    document.getElementById("gameContent").style.display = "none";
}

function startTask() {
    document.getElementById("gameIntro").style.display = "none";
    document.getElementById("gameContent").style.display = "block";
}

function finishTask() {
    var answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value,
        q6: document.querySelector('input[name="q6"]:checked').value,
        q7: document.querySelector('input[name="q7"]:checked').value,
        q8: document.querySelector('input[name="q8"]:checked').value,
        q9: document.querySelector('input[name="q9"]:checked').value,
        q10: document.querySelector('input[name="q10"]:checked').value
    };

    var correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'b',
        q6: 'a',
        q7: 'c',
        q8: 'b',
        q9: 'c',
        q10: 'a'
    };

    for (var key in answers) {
        if (answers[key] === correctAnswers[key]) {
            score++;
        }
    }

    localStorage.setItem('score', score);
    window.location.href = "result.html";
}
