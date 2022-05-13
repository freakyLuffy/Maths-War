var playing = false;
var score;
var correctAnswer;
var myAudio = new Audio("audio.wav");
var MyAudio2=new Audio("myaudio2.wav");

document.getElementById("startreset").onclick = () => {
    if (playing == true) {
        location.reload(true);
    } else {
        playing = true
        score = 0;
        remainingTime();
        show("timeremaining");
        hide("gameOver");
        text("startreset", "Reset Game");
        generateQA();
    }
}
document.getElementById("box1").onclick = () => {
    if (playing == true) {
        if (document.getElementById("box1").innerHTML == correctAnswer) {
            myAudio.currentTime = 0;
            myAudio.play();
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            hide("correct"); 
            generateQA();
        }else{
            MyAudio2.currentTime=0;
            MyAudio2.play();
            hide("correct");
            show("wrong");
            hide("wrong");
        }
    }
}
document.getElementById("box2").onclick = () => {
    if (playing == true) {
        if (document.getElementById("box2").innerHTML == correctAnswer) {
            myAudio.currentTime = 0;
            myAudio.play();
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            hide("correct");
            generateQA();
        }else{
            MyAudio2.currentTime=0;
            MyAudio2.play();
            hide("correct");
            show("wrong");
            hide("wrong");
        }
    }
}
document.getElementById("box3").onclick = () => {
    if (playing == true) {
        if (document.getElementById("box3").innerHTML == correctAnswer) {
            myAudio.currentTime = 0;
            myAudio.play();
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            hide("correct");
            generateQA();
        }else{
            MyAudio2.currentTime=0;
            MyAudio2.play();
            hide("correct");
            show("wrong");
            hide("wrong");
          
        }
    }
}
document.getElementById("box4").onclick = () => {
    if (playing == true) {
        if (document.getElementById("box4").innerHTML == correctAnswer) {
            myAudio.currentTime = 0;
            myAudio.play();
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            hide("correct");
            generateQA();
        }else{
            MyAudio2.currentTime=0;
            MyAudio2.play();
            hide("correct");
            show("wrong");
            hide("wrong");
        }
    }
}
var remainingTime = () => {
    var time = 60;
    setInterval(() => {
        time--;
        if (time >= 0) {
            // ACTIVE TIME
            document.getElementById("timeremainingvalue").innerHTML = " " + time + " ";
        } else {
            // expired time
            clearInterval(this);
            document.getElementById("gameOver").innerHTML = "<p>Game Over</p><p>Your score is: " + score + "</p>";
            show("gameOver");
            hide("timeremaining");
            hide("choices");
            hide("score");
        }
    }, 1000);
}
var generateQA = () => {
    var ops=["X","+","-"];
    var x = Math.floor(Math.random() * 9) + 1;
    var y = Math.floor(Math.random() * 9) + 1;
    var op= Math.floor(Math.random() * 3);
    if(op==0)
    {
        correctAnswer = x * y;
    }
    else if(op==1)
    {
        correctAnswer = x + y;
    }
    else{
        correctAnswer = x - y;
    }
    var correctPosition = 1 + (Math.round(3 * Math.random()));
    var answers = [correctAnswer];
    document.getElementById("question").innerHTML = "<p>" + x + ops[op] + y + "</p>";
    for (let i = 1; i <= 4; i++) {
            do {
                var wrongAnswer;
                if(op==0)
                {
                 wrongAnswer= (Math.floor(Math.random() * 9) + 1) * (Math.floor(Math.random() * 9) + 1);
                }
                else if(op==1)
                {
                    wrongAnswer= (Math.floor(Math.random() * 9) + 1) + (Math.floor(Math.random() * 9) + 1);
                }
                else{
                    wrongAnswer= (Math.floor(Math.random() * 9) + 1) - (Math.floor(Math.random() * 9) + 1);
                }
                document.getElementById("box" + i).innerHTML = wrongAnswer;
               // answers.push(wrongAnswer);
            } while (answers.indexOf(wrongAnswer) > -1);
        answers.push(wrongAnswer);
    }
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
}
var show = (id) => {
    document.getElementById(id).style.display = "block";
}

var hide = (id) => {
    document.getElementById(id).style.display = "none";
}

var text = (id, text) => {
    document.getElementById(id).innerHTML = text;
}



show("gameOver");
text("gameOver", "<p>Please click start game to play</p>");
text("startreset", "Start Game");
