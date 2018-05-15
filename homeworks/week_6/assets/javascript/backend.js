$(document).ready(function () {
    // debugger
    var animals = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'ferret', 'turtle', 'sugar glider',
                    'chinchilla', 'hedgehog', 'hermit crab', 'gerbil', 'pygmy goat', 'checken', 'capybara', 'teacup pig',
                    'serval', 'salamander', 'frog'];

    var my_api_key = "dc6zaTOxFJmzC";

    var animal = "";

    var query_url = "";

    var regex = /^[a-zA-Z_\s]+$/;
    // Function for displaying movie data
    function renderButtons() {
        // debugger
        function createRadioElement(label) {
            var replaceLabel = label.replace(/\ /g, '_');
            var id = replaceLabel;
            var button = '<button class="btn btn-success" type="button">' + label + '</button>&nbsp;';
            $('#animal-buttons').append(button);
        } 

        $('#animal-buttons').empty();
        animals.forEach(function (animal) {
            createRadioElement(animal);
        })
    }

    $("#clearResults").on("click", function () {
        // debugger
        console.log("clicked");
        $("#animals").children('.col-md-3').remove();
        $('.animal_search_input').val('');
        animals = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'ferret', 'turtle', 'sugar glider',
            'chinchilla', 'hedgehog', 'hermit crab', 'gerbil', 'pygmy goat', 'checken', 'capybara', 'teacup pig',
            'serval', 'salamander', 'frog'
        ];
        renderButtons();
    });

    $('#submitResult').on('click', function(){
        // debugger
        animal = $('.animal_search_input').val();

        animals.push(animal);

        console.log(animals);

        renderButtons();
    })
    
    $("body").on("click", '.gif', function () {
        // debugger

        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $("#animal-buttons").on('click', 'button', function(event){
        // debugger
        var clickedBtn = event.target.textContent;
        var ele = document.querySelectorAll("#animal-buttons > button.btn");
        for (var i = 0; i < ele.length; i++) {
            var check = ele[i].textContent;
            if (check === clickedBtn) {
                animal = check;
                break;
            }
        }
        var url = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=dc6zaTOxFJmzC&limit=10";;

        query_url = url;
        $("#animals").children('.col-md-3').remove();
        ajaxCall(query_url);
    });

    $("button, input[type='button']").on('click', function (event) {
        // debugger
        event.preventDefault();
        $("#animals").children('.col-md-3').remove();
        animal = $('.animal_search_input').val().trim();
        if (regex.test(animal)) {
            

            var url = "https://api.giphy.com/v1/gifs/search?q=" +
                animal + "&api_key=dc6zaTOxFJmzC&limit=10";;

            query_url = url;

            ajaxCall(query_url);
        }
        else{
            alert('Please enter a alphabet letters in your search!');
            $('.animal_search_input').val('');
        }
    });

    function ajaxCall(queryAnimal){
        // debugger
        $.ajax({
            url: queryAnimal,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            xhr: function (data, status) {

                var xhr = new window.XMLHttpRequest();

                xhr.addEventListener("error", function (evt) {
                    alert("an error occured");
                }, false);

                xhr.addEventListener("abort", function () {
                    alert("cancelled");
                }, false);

                console.log(xhr);

                return xhr;
            },
            error: function (err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            }

        }).then(function (response) {

            var results = response.data;
            
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                var animalDiv = $("<div>").addClass('col-md-3');
                
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                var animalImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                animalImage.attr("src", (results[i].images.fixed_height.url).replace(/\?.*/, ''));
                animalImage.attr("data-still", (results[i].images.fixed_height.url).replace(/\/200?.*/, '/200_s.gif'));
                animalImage.attr("data-animate", (results[i].images.fixed_height.url).replace(/\?.*/, ''));
                animalImage.attr("data-state", "animate");
                animalImage.attr("class", "gif");
                // Appending the paragraph and image tag to the animalDiv
                animalDiv.append(p);
                animalDiv.append(animalImage);

                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#animals").prepend(animalDiv);
            }
        }).done(function(){
            console.log("success");

        }).fail(function(){
            console.log("error");
            
        }).always(function(){
            console.log("complete");
        });
    };

    renderButtons();
});