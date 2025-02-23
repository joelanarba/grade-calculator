
let courseName = document.getElementById('course-name');
let examScore = document.getElementById('exam-score');
let output = document.getElementById('output');
let btn = document.getElementById('btn');

function calculateGrade() {
    let score = Number(examScore.value.trim());

    if (isNaN(score) || score < 0 || score > 100) {
        output.innerHTML = "Please enter a valid score between 0 and 100.";
        output.style.color = "red";
        return;
    }

    let grade;
    if (score >= 80) {
        grade = "A";
    } else if (score >= 75) {
        grade = "B+";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 65) {
        grade = "C+";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 55) {
        grade = "D+";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    output.innerHTML = `Your grade for ${courseName.value} is <strong>${grade}</strong>.`;
    output.style.color = "black";
}

btn.addEventListener("click", calculateGrade);

examScore.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        calculateGrade(); 
    }
});

