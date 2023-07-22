const choices1 = document.getElementById("choices1");
const choices2 = document.getElementById("choices2");
const choices3 = document.getElementById("choices3");
const Audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation(){

    var num1 =  Math.floor(Math.random() * 10);
    var num2 =  Math.floor(Math.random() * 10);
    var dummyAnswer1 =  Math.floor(Math.random() * 10);
    var dummyAnswer2 =  Math.floor(Math.random() * 10);
    var allAnswers = [];
    var switchAnswers = [];

    

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    if (document.getElementById("num1").innerHTML < document.getElementById("num2").innerHTML){
            [document.getElementById("num1").innerHTML, document.getElementById("num2").innerHTML] = [document.getElementById("num2").innerHTML, document.getElementById("num1").innerHTML];
        }else{
            answer = num1 - num2;
        }

    answer = num2 - num1;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for(i = allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i+1)), 1)[0]);
    }

    choices1.innerHTML = switchAnswers[0];
    choices2.innerHTML = switchAnswers[1];
    choices3.innerHTML = switchAnswers[2];

};

choices1.addEventListener("click", function(){
    if(choices1.innerHTML == answer){
        generate_equation();
    }
    else{
        myAudio.play();
    }
});

choices2.addEventListener("click", function(){
    if(choices2.innerHTML == answer){
        generate_equation();
    }
    else{
        myAudio.play();
    }
});

choices3.addEventListener("click", function(){
    if(choices3.innerHTML == answer){
        generate_equation();
    }
    else{
        myAudio.play();
    }
});

generate_equation();