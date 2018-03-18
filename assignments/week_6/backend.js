$(document).ready(function () {

    var my_api_key = "b847cd21333b4409afb707af23b402e0";
    var query_url = "https://api.nytimes.com/svc/search/v2/articlesearch.jsonp?q=";
    var user_input = "";

    $('.get_related_article').on('click', function (event) {
        event.preventDefault();
        user_input = $('.form-control').val().replace(/\ /g, '+');
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        query_url = query_url + user_input + "&page=1&sort=oldest&api-key=" + my_api_key;
        url += '?' + $.param({
            'api-key': "ad4988018f54406eb8c6e276f88f074e",
            'q': user_input
        });
        // debugger
        $.ajax({
            url: url,
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
            console.log(response);
            for (var i = 0; i < response.response.docs.length; i++) {
                console.log(response.response.docs[i].headline.main);
                $('#results').append('<p>').text(response.response.docs[i].headline.main);
            }
        }).done(function(){
            console.log("success");
        }).fail(function(){
            console.log("error");
        }).always(function(){
            console.log("complete");
        });
    });
});