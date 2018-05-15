$(document).ready(function(){
    var config = {
        ".chosen-select": {},
        ".chosen-select-deselect": {
            allow_single_deselect: true
        },
        ".chosen-select-no-single": {
            disable_search_threshold: 10
        },
        ".chosen-select-no-results": {
            no_results_text: "Oops, nothing found!"
        },
        ".chosen-select-width": {
            width: "95%"
        }
    };

    for (var selector in config) {
        $(selector).chosen(config[selector]);
    }

    // Capture the form inputs
    $("#submit").on("click", function (event) {
        event.preventDefault();

        // Form validation
        function validateForm() {
            var isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".chosen-select").each(function () {

                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }

        // If all required fields are filled
        if (validateForm()) {
            // Create an object for the user"s data
            var userData = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [
                    parseInt($("#q1").val()),
                    parseInt($("#q2").val()),
                    parseInt($("#q3").val()),
                    parseInt($("#q4").val()),
                    parseInt($("#q5").val()),
                    parseInt($("#q6").val()),
                    parseInt($("#q7").val()),
                    parseInt($("#q8").val()),
                    parseInt($("#q9").val()),
                    parseInt($("#q10").val())
                ]
            };

            // AJAX post the data to the friends API.
            $.ajax({
                url: "/api/friends",
                data: JSON.stringify(userData),
                contentType: 'application/json',
                method: 'POST'
            }).then(function (response) {

                console.log(response);
                // Looping through each result item
                if (response !== null) {
                    $("#match-name").text(response.name);
                    $("#match-img").attr("src", response.photo);

                    // Show the modal with the best match
                    $("#results-modal").modal("toggle");
                }
            }).done(function () {
                console.log("success");

            }).fail(function () {
                console.log("error");

            }).always(function () {
                console.log("complete");
            });
        } else {
            alert("Please fill out all fields before submitting!");
        }
    });
});