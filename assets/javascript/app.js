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
            	if (mode === "start") {
	                mode = "ask";
	                loop();
	                $("html").off("click");
	            }
            })
        } else if (mode === "ask") { // Question-------------------------------------------------------------
            var randomOrder = 0;

            var question = [ // list of questions
                "When found on a beer bottle, what does the acronym IPA stand for?",
                "To be legally sold as bourbon, a whiskey's mash must contain at least 51% of what grain?",
            ];

            var answer = [ // list of answers to go with questions
                ["India Pale Ale", "Irish Person Alcohol", "International Perscription Agitator", "Is Proper Alcohol"],
                ["Corn", "Wheat", "Barly", "Sesame"]
            ];

            var answerRandomize = [0,1,2,3];

            answerRandomize = answerRandomize.sort(function(a, b){ // randomize the order of the answerRandomize variable
            	return 0.5 - Math.random();
            });

            console.log(answerRandomize.toString());

            var questionNumber = Math.floor(Math.random() * question.length); // pick a random question

            $("body").html(
                '<h1>Boozie Trivia</h1>' +
                '<div>' +
                '<h2><p>' + question[questionNumber] + '</p></h2>' +
                '</div>'
            );
            for (var i = 0; i < 4; i++) {
            	$("body").append(
            	'<div>' +
                '<button type="button">' + answer[questionNumber][answerRandomize[i]] + '</button>' +
                '</div>'
            	)
            }

        	$("button").click(function() {
        		// console.log($(this).text());
        		if ($(this).text() === answer[questionNumber][0] ) {
        			console.log("Correct");
        		}
        		else {
        			console.log("incorrect");
        		}
            });
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