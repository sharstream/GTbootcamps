// app.js

$(document).ready(function(){


    //event handle to create a burger

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("bu").val().trim(),
            devored: $("[name=devored]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});