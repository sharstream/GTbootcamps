$(document).ready(function(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAUQYckh_cEHjx8jUoU-ERcqz8IEJ8NKhI",
        authDomain: "myfirstproject-b9662.firebaseapp.com",
        databaseURL: "https://myfirstproject-b9662.firebaseio.com",
        projectId: "myfirstproject-b9662",
        storageBucket: "myfirstproject-b9662.appspot.com",
        messagingSenderId: "746700287580"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    // Create a variable to reference the database.
    var database = firebase.database();

    var trains = [];

    var timer = 0;

    //  Variable that will hold our setInterval that runs the stopwatch
    var intervalId;

    // prevents the clock from being sped up unnecessarily
    var clockRunning = false;

    function displayTable(ele) {
        appendTableColumn($('table'), ele);
    }

    function makeTable(container, data) {
        var table = $("table");
        $.each(data, function (rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function (colIndex, c) {
                row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
            });
            table.append(row);
        });
        return container.append(table);
    }

    function appendTableColumn(table, rowData) {
        var lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
        $.each(rowData, function (colIndex, c) {
            lastRow.append($('<td/>').text(c));
        });

        return lastRow;
    }
    
    function editRow(row) {
        $('td', row).each(function () {
            $(this).html('<input type="text" value="' + $(this).html() + '" />');
        });
    }

    function retrieveTravels() {
        // debugger
        var rootRef = database.ref();
        var urlRef = rootRef.once("value", function(snapshot){
            snapshot.forEach(function (child) {
                var trainTable = makeTable($(document.table), 
                        [[child.val().name, child.val().destination, child.val().frequency, child.val().nextArrive, child.val().away]]);
                trains.push([child.val().name, child.val().destination, child.val().frequency, child.val().nextArrive, child.val().away]);
            });
        });
    }

    function databasePush(name, destination, frequency, nextArrive, away) {
        database.ref().push({
            name: name,
            destination: destination,
            frequency: frequency,
            nextArrive: nextArrive,
            away: away
        });
    }

    function calculateNextArrival(eventTime, currentTime, duration, diffTime, data) {
        // how calculate retention time for current and nextarrival
        var interval = 1000; 
        diffTime = eventTime - currentTime;
        var fromDate = moment.utc(eventTime);// Timestamp 13:00 GMT
        var toDate = moment(fromDate, 'hh:mm a').format('hh:mm a');// Timestamp 13:00 PM
        toDate.add('mm:ss', duration);

        duration = moment.duration(diffTime * 1000, 'milliseconds');
        
        var hourDiff = toDate.diff(fromDate, 'hours');
        var minuteDiff = toDate.diff(fromDate, 'minutes');
        hourDuration = Math.floor(minuteDiff / 60);
        minuteDuration = minuteDiff % 60;
        toDate.toISOString();

        setInterval(function () {
            duration = moment.duration(duration - interval, 'milliseconds');
            appendTableColumn($('table'),data);// refresh the rowTable
            // $('table > tbody'+ ).text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
        }, interval);
    };

    $('th').on('click', function(){
        debugger
        editRow(this);
    });
    
    $("#submit").on("click", function (event) {
        // prevent page from refreshing when form tries to submit itself
        debugger
        event.preventDefault();
        
        // Capture user inputs and store them into variables

        var name = $("#name").val().trim();
        var destination = $("#destination").val().trim();

        var firstTime = $("#firstTime").val().trim();

        var frequency = $("#frequency").val().trim();

        var nextArrive = "3:00 PM";
        var away = "2";

        // calculateNextArrival(firstTime, nextArrive, frequency, away);

    // nextArrive = moment(firstTime).add(frequency, 'hh:mm A').format("HH:mm A");
    // away = moment(nextArrive).diff(firstTime, 'HH');

        databasePush(name, destination, frequency, nextArrive, away);
        var obj;
        database.ref().limitToLast(1).on("child_added", function(snapshot){
            console.log(snapshot.val());
            if (snapshot.child("name").exists() &&
                    snapshot.child("destination").exists() &&
                    snapshot.child("frequency").exists() &&
                    snapshot.child("nextArrive").exists() &&
                    snapshot.child("away").exists())
            {

                obj = [
                    snapshot.val().name,
                    snapshot.val().destination,
                    snapshot.val().frequency,
                    snapshot.val().nextArrive,
                    snapshot.val().away
                ]
                trains.push(obj);
            }
        });
        displayTable(obj);
    });

    retrieveTravels();

});



