$( document ).ready(function() {

    $("#submit").on("click", function () {
        var userInput1 = $("#keyword").val();
        var userInput2 = $("#pageNumber").val();
        console.log(userInput1);
        console.log(userInput2);

    });

    $("#clearResults").on("click", function () {
        console.log("clicked");
        $("#keyword").val('');
        $("#pageNumber").val('');
        $("#results").val('');


    })

});
