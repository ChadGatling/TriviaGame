$(document).ready(function() {
    var mode = "start";
    var playerName = "";

    loop();
	
	function loop() {
	if (mode === "start") {// Start Screen-----------------------------------------------------------
		console.log('mode === "start"');
		    var startScreen =
		        '<h1>Hangry Trivia</h1>' +
		        '<div>' +
		        '<h2><p>Hello ' + playerName + '. </p> Enter key or click to start.</h2>' +
		        '</div>';

	        getName();

	        $("body").html(startScreen);
	        $("html").click(function() {
	        	mode = "ask";
	        	loop();
	        })
	    }

	    else if (mode === "ask") {// Question-------------------------------------------------------------
	    	console.log('mode === "ask"')	
		    var askTrivia =
		        '<h1>Hangry Trivia</h1>' +
		        '<div>' +
		        '<h2><p>' + question + '</p></h2>' +
		        '</div>';
		    var question = [
		        "When found on a beer bottle, what does the acronym IPA stand for?",
		    ];

		    var answer = [
		        "India Pale Ale",
		    ];

		    $("body").html(
	        '<h1>Hangry Trivia</h1>' +
	        '<div>' +
	        '<h2><p>' + question[0] + '</p></h2>' +
	        '</div>'
		    	);
		    loop();
		}

	    // Congratulations Screen----------------------------------------------------------------

	    // Wrong answer screen--------------------------------------------------------------

	    // Final Screen-------------------------------------------------------------------------
	}
});

function getName() {
	playerName = prompt("Please pick a name.");
    if (playerName === "") {
        console.log('case "":');
        playerName = prompt("Sorry you need to pick a name.");
        getName();
    }
}