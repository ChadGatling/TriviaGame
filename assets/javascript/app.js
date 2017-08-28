$(document).ready(function() {
    var mode = "start";
    var playerName = "";

    loop();

    function loop() {
    	console.log('Mode === ' + mode);
        if (mode === "start") { // Start Screen-----------------------------------------------------------
            getName();

            var startScreen =
                '<h1>Boozie Trivia</h1>' +
                '<div>' +
                '<h2><p>Hello ' + playerName + '. </p> Click to start.</h2>' +
                '</div>';

            $("body").html(startScreen);
            $("html").click(function() {
                mode = "ask";
                loop();
            })
        } else if (mode === "ask") { // Question-------------------------------------------------------------
            console.log('mode === ' + mode)
            var randomOrder = 0;

            var question = [
                "When found on a beer bottle, what does the acronym IPA stand for?",
                "To be legally sold as bourbon, a whiskey's mash must contain at least 51% of what grain?",
            ];

            var answer = [
                ["India Pale Ale", "Irish Person Alcohol", "International Perscription Agitator", "Is Proper Alcohol"],
                ["Corn", "Wheat", "Barly", "Sesame"]
            ];

            var questionNumber = Math.floor(Math.random() * question.length);

            $("body").html(
                '<h1>Boozie Trivia</h1>' +
                '<div>' +
                '<h2><p>' + question[questionNumber] + '</p></h2>' +
                '</div>'
            );
            for (var i = 0; i < 4; i++) {
            	$("body").append(
            	'<div>' +
                '<button type="button">' + answer[questionNumber][i] + '</button>' +
                '</div>'
            	)

        	$("button").click(function() {
        		console.log(this);
        	});
            }
            // loop();
        }

        // Congratulations Screen----------------------------------------------------------------

        // Wrong answer screen--------------------------------------------------------------

        // Final Screen-------------------------------------------------------------------------

	    function getName() {
	        playerName = prompt("Please pick a name.");
	        if (playerName === "") {
	            console.log('case "":');
	            playerName = prompt("Sorry you need to pick a name.");
	            getName();
	        }
	    }
    }

});