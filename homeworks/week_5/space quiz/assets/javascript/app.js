//Using few source code from the web site: https://www.sitepoint.com/simple-javascript-quiz/#demo
$(document).ready(function() {
    // global vars
    var question_count = 3;
    var intervalId;
    var question_number = 0;
    var count = 3;
    var timer_running = false;
    var optcount = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timer = 0;

    // var counter = setInterval(countdown, 1000); //1000 will  run it every 1 second

    //objects
    const myFirstQuestion = {
        question: "1. What is the Great Red Spot?",
        answers: {
            a: "A smudge on the Hubble telescope",
            b: "A storm on Saturn",
            c: "A storm on Jupiter"
        },
        correctAnswer: 'c'
    }
    const mySecondQuestion = {
        question: "2. How much would a 150-pound person weigh on Mars?",
        answers: {
            a: "174 pounds",
            b: "102 pounds",
            c: "57 pounds"
        },
        correctAnswer: 'c'
    }
    const myThirdQuestion = {
        question: "3. About how long is a day on Saturn?",
        answers: {
            a: "10 hours and 47 minutes",
            b: "11 hours and 47 minutes",
            c: "12 hours and 47 minutes"
        },
        correctAnswer: 'a'
    }
    const myFourQuestion = {
        question: "4. The temperature on this planet's surface is hot enough to melt lead. Which one is it?",
        answers: {
            a: "Venus",
            b: "Earth",
            c: "Mars"
        },
        correctAnswer: 'a'
    }
    const myFiveQuestion = {
        question: "5. Which planet has the highest mountain and deepest valley in the solar system?",
        answers: {
            a: "Venus",
            b: "Pluto",
            c: "Earth"
        },
        correctAnswer: 'b'
    }
    var questions = [myFirstQuestion, mySecondQuestion, myThirdQuestion, myFourQuestion, myFiveQuestion];

    function countdown() {
        // debugger
        reloadNextQuestion(timer_running);
        timer = setTimeout(countdown, 1000);      
        if (count < 0) {
            debugger
            
            if (question_number === 4) {
                count = 0;
                clearTimeout(timer);
                // answeredQuestion();
                $('.question').text("");
                $('.options').children().remove();
                $('#prompt1').text("Well Done!!!!");
                $('#prompt2').text("Click on Check button to display your final result: ");
                $('#reset').css({ 'visibility': 'visible' });
            }
            else{
                count = 15
            }       
        }
        $('#timer').html('Time Remaining: ' + count + ' Seconds.');
        count--;
    }

    function createRadioElement(elem, label,checked) {
        optcount = optcount + 1;
        var id = 'option' + optcount;
        var answer = 'answer' + optcount;
        $('.options').append($('<input />', {
            'class': id,
            'type': 'radio',
            'name': answer,
            'value': questions[question_number].correctAnswer
        }));
        $('.options').append('<label for="' + id + '">'
            + label + '</label><br />');
    }

    function reloadNextQuestion(load) {       
        if (!load && question_number < questions.length) {
            $('.question').text(questions[question_number].question);
            optcount = 0;
            createRadioElement($('.options'), questions[question_number].answers.a);
            createRadioElement($('.options'), questions[question_number].answers.b);
            createRadioElement($('.options'), questions[question_number].answers.c);         
            timer_running = true;
            question_number++;
        }
        else if(count === 0){
            timer_running = false;
            $('.question').text("");
            $('.options').children().remove();
            $('#number_correct').css({ 'visibility': 'hidden' });
            $('#number_incorrect').css({ 'visibility': 'hidden' });
            $('#number_unanswered').css({ 'visibility': 'hidden' });
        }
    }

    function redirect(number) {
        count = number;
        countdown();
    }
    redirect(15);

    function answeredQuestion(){
        // debugger

        var answer1 = $('label[for=option3]').text();
        var answer2 = $('label[for=option3]').text();
        var answer3 = $('label[for=option1]').text();
        var answer4 = $('label[for=option1]').text();
        var answer5 = $('label[for=option2]').text();

        // debugger
        var compareTo = questions[question_number - 1].answers.c;
        if (answer1 === questions[question_number-1].answers.c) {
            correct++;
        }
        else if (answer2 === questions[question_number-1].answers.c) {
            correct++;
        }
        else if (answer3 === questions[question_number-1].answers.a) {
            correct++;
        }
        else if (answer4 === questions[question_number-1].answers.a) {
            correct++;
        }
        else if (answer5 === questions[question_number-1].answers.b) {
            correct++;
        }
        else {
            incorrect++;
        }

        $('.progress').text(+correct+"/5");
    }

    function init() {
        clearTimeout(timer);
        timer = 0;
        question_count = 3;
        question_number = 0;
        count = 15;
        timer_running = false;
        optcount = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        $('.question').text("");
        $('.options').children().remove();
        $('#after_submit').css({ 'visibility': 'hidden' });
        $('#prompt1').text("Well Done!!!!").css({ 'visibility': 'hidden' });
        $('#prompt2').text("Click on Check button to display your final result: ").css({ 'visibility': 'hidden' });
        $('#reset').css({ 'visibility': 'visible' }).css({ 'visibility': 'hidden' });  
        redirect(15);
    }

    $('#check').on('click', function(event) {
        // debugger    
        event.preventDefault();
        answeredQuestion();  
        $('#number_correct').text('Correct: ' + correct).css({'visibility':'visible'});
        $('#number_incorrect').text('Incorrect: ' + incorrect).css({ 'visibility': 'visible' });
        $('#number_unanswered').text('Unanswered: ' + unanswered).css({ 'visibility': 'visible' });
        $('#after_submit').css({'visibility':'visible'});   
    });

    $('#reset').on('click', function() {
        // debugger
        init();
    })
});