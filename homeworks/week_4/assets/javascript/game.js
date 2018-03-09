/* ---- Game jQuery-JS logic ------ *
*    jQuery Star Wars RPG Game      *
*       Author: David Perez         *
*          GT bootcamps             *
* --------------------------------- */


$(document).ready(function () {


/* ------- Global variables ------- *
*                                   *
* --------------------------------- */

    var char1Count = true;
    var cousntDefated = 0;
    var darthCount = 0;
    var obiCount = 0;
    var yodaCount = 0;
    var porgCount = 0;

/* ---------- Objects ------------- *
*                                   *
* --------------------------------- */
//or this alternative object with method function
var character = {
    health_points: 200,
    attack_power: 0,
    counter_attack_power: 0,
    win: function win() { alert('You win!'); resetGame(); },
    lose: function lose() { alert('Oh no, you lose!'); resetGame(); }
}

/* --------- Game Logics ---------- *
*                                   *
* --------------------------------- */

    function resetGame() {
        resetUI();
        character.health_points = 200
        character.attack_power = 0;
        character.counter_attack_power = 0;
    }

    $('#darth_vader').on('click', function(){
        if (char1Count === true) {
            $(this).addClass('main');
            darthCount++;
            char1Count = false;

            $('#obi_wan').appendTo('.enemiesBox').css({'heigth': '250px', 'width':'300px', 
                'background-color':'red'});
            $('#darth_vader p').css({'margin-left': '30px'});
            $('#yoda').appendTo('.enemiesBox').css({'heigth': '250px', 'width':'300px', 
                'background-color':'red'});
            $('#yoda p').css({'margin-left': '30px'});
            $('#porg').appendTo('.enemiesBox').css({'heigth': '250px', 'width':'300px', 
                'background-color':'red'});
            $('#porg p').css({'margin-left': '30px'});
            $('.starImage').css({'heigth': '250px', 'width':'300px', 
                                'margin-left':'auto', 'margin-right': 'auto', 'display': 'block'});
        }
        else if (char1Count === false && darthCount === 0) {
            $('#darth_vader').appendTo('.defenderBox').addClass("def").css({'background-color':'black', 'color': 'white'});
            $('#darth_vader p').css({'margin-left': '30px'});
        }
    });

    $('#obi_wan').on('click', function(){
        if (char1Count === true) {
            $(this).addClass('.main');
            obiCount++;
            char1Count = false;

            $('#darth_vader').appendTo('.enemiesBox').css({'heigth': '250px', 'width': '300px',
                'background-color': 'red'});
            $('#darth_vader p').css({'margin-left': '30px'});
            $('#yoda').appendTo('.enemiesBox').css({'heigth': '250px', 'width': '300px',
                'background-color': 'red'});
            $('#yoda p').css({'margin-left': '30px'});
            $('#porg').appendTo('.enemiesBox').css({'heigth': '250px', 'width': '300px',
                'background-color': 'red'});
            $('#porg p').css({'margin-left': '30px'});
            $('.starImage').css({'heigth': '250px', 'width': '300px',
                'margin-left': 'auto', 'margin-right': 'auto', 'display': 'block'});
        }
        else if (char1Count === false && obiCount === 0) {
            $('#obi_wan').appendTo('.defenderBox').addClass("def").css({ 'background-color': 'black', 'color': 'white' });
            $('#obi_wan p').css({'margin-left': '30px'});
        }
    });

    $('#yoda').on('click', function(){
        if (char1Count === true) {
            $(this).addClass('.main');
            yodaCount++;
            char1Count = false;

            $('#darth_vader').appendTo('.enemiesBox').css({'heigth': '250px', 'width': '300px',
                'background-color': 'red'});
            $('#darth_vader p').css({'margin-left': '30px'});
            $('#obi_wan').appendTo('.enemiesBox').css({'heigth': '250px', 'width': '300px',
                'background-color': 'red'});
            $('#obi_wan p').css({'margin-left': '30px'});
            $('#porg').appendTo('.enemiesBox').css({'heigth': '250px', 'width': '300px',
                'background-color': 'red'});
            $('#porg p').css({'margin-left': '30px'});
            $('.starImage').css({'heigth': '250px', 'width': '300px',
                'margin-left': 'auto', 'margin-right': 'auto', 'display': 'block'});
        }
        else if (char1Count === false && yodaCount === 0) {
            $('#yoda').appendTo('.defenderBox').addClass("def").css({ 'background-color': 'black', 'color': 'white' });
            $('#yoda p').css({'margin-left': '30px'});
        }
    });

    $('#porg').on('click', function(){
        if (char1Count === true) {
            $(this).addClass('.main');
            porgCount++;
            char1Count = false;

            $('#darth_vader').appendTo('.enemiesBox').css({'heigth': '250px', 'width': '300px',
                'background-color': 'red'});
            $('#darth_vader p').css({'margin-left': '30px'});
            $('#obi_wan').appendTo('.enemiesBox').css({'heigth': '250px', 'width': '300px',
                'background-color': 'red'});
            $('#obi_wan p').css({'margin-left': '30px'});
            $('#yoda').appendTo('.enemiesBox').css({'heigth': '250px', 'width': '300px',
                'background-color': 'red'});
            $('#yoga p').css({'margin-left': '30px'});
            $('.starImage').css({'heigth': '250px', 'width': '300px',
                'margin-left': 'auto', 'margin-right': 'auto', 'display': 'block'});
        }
        else if (char1Count === false && porgCount === 0) {
            $('#porg').appendTo('.defenderBox').addClass("def").css({ 'background-color': 'black', 'color': 'white' });
            $('#porg p').css({'margin-left': '30px'});
        }
    });

    $('.btn-attack').on('click', function () {
        var clicked = $(this);

        var counterDefeated = 0;
        var charName = $('.def').attr('characterName');
        var healthMain = $('.main').attr('health');
        var attackMain = $('.main').attr('attack');
        var healthDefender = $('.def').attr('health');
        var counterAttack = $('.def').attr('counterAttack');

        if (clicked.hasClass('#defender')==='' && clicked.hasClass('#character') === '') {
            alert('You need to select a character and defender to start your game');
        }

        var healthMainAfter = healthMain - counterAttack;
        var healthDefAfter = healthDefender - attackMain;

        var healthMain1 = $('.main').attr('health', healthMainAfter);

        var healthDef1 = $('.def').attr('health', healthDefAfter).css({'text-align': 'center'});

        $('.main p').html($('.main').attr("health"));
        $('.def p').html($('.def').attr('health'));

        $('.defender').html('<p>' + 'You attacked ' + charName +
                        ' for ' + attackMain + ' damage ' +
                        charName + ' attacked you back for ' +
                        counterAttack + ' </p>').css({'font-size': '20px', 'text-align':'center'});

        attackMain = attackMain * 2;
        var attackMain1 = $('.main').attr('attack', attackMain);
            
            if (healthMainAfter <= 0) {
                $('.defender').html('<p>' + 'You have been defeated...Game Over!!!' + '</p>').css({'font-size': '20px'});
                $('.btn-attack').off('click');

            } else if (healthDefAfter <= 0) {
                $('.def').remove();
                $('.defender').html('<p>' + ' You have been defeated ' + charName +
                                    ' choose to fight another enemy.' + '</p>').css({'font-size': '20px'});
                cousntDefated++;
                console.log(' count during fight! '+counterDefeated);

                if(counterDefeated === 3){
                    $('.btn-attack').off('click');
                }
            }
    });

    function resetUI() {
        $('.selected_character').remove();
        $('.enemy_character').remove();

        var images = ['dark_vader.jpg', 'obi_wan.jpg', 'yoda.jpg', 'porg_plush.jpg'];
        for (var i = 0; i < images.length; i++) {

            var imageCharacter = $("<img>");
            imageCharacter.addClass("character-image");
            imageCharacter.attr("src", "assets/images/" + images[i]);
            message.append(imageCharacter);
        }
    }
});

