$(document).ready(function() {
            var mode = "start";
            var playerName = "";
            var questionNumber = 0;
            var correctAnswers = 0;
            var incorrectAnswers = 0;
            var outOfTimeAnswers = 0;
            var readyWaitTime = 3;
            var answerTime = 7;
            var afterQuestionTime = 5;

            var question = [ // list of questions
                "When found on a beer bottle, what does the acronym IPA stand for?",
                "To be legally sold as bourbon, a whiskey's mash must contain at least 51% of what grain?",
                "What is added to a Martini to make it a Gibson",
                "Gin is made with what flavor?",
                "What is the literal translation of vodka?",
                "Which of these is found in 25% of all alcoholic beverages consumed globally",
                "What is the highest proof possible for any type of alcohol?",
                "Who invented the famous cocktail, The Manhattan?",
                "What is the word for the fear of alcohol?"
            ];

            var answer = [ // list of answers to go with questions
                ["India Pale Ale", "Irish Person Alcohol", "International Perscription Agitator", "Is Proper Alcohol"],
                ["Corn", "Wheat", "Barley", "Sesame"],
                ["A Miniature Onion", "A Cherry Tomato", "A Chicken Wing", "Cinnamon"],
                ["Juniper", "Lavender", "Anise", "Varnish"],
                ["Little Water", "Angry Bear", "Mean Snow", "Domestic Abuse"],
                ["Vodka", "Dead Skin Cells", "Methamphetamine", "Almond Extract"],
                ["190 Proof", "100 Proof", "200 Proof", "95 Proof"],
                ["Winston Churchill’s mother", "John D. Rockefeller's wife", "Al Capone", "Humphrey Bogart"],
                ["Methyphobia", "Alcophobia", "Jollieaphobia", "Buzz Killery"]
            ];

            loop();

            function loop() {
                console.log(questionNumber + ' of ' + (question.length - 1));
                if (mode === "start") { // Start Screen-------------------------------------------------------------------
                    getName();

                    playerName = playerName[0].toUpperCase() + playerName.slice(1);

                    if (playerName === "Rachel") {
                        $("body").html(
                            '<p>Easter Egg Discovered!</p>' +
                            '<h1>Hi Rachi :)</h1>' +
                            "<h1>You're beautiful</h1>" +
                            '<h1>and I love you</h1>' +
                            "<p>let's get drunk :P</p>"
                        );
                        setTimeout(normalStart, 3000);
                    } else if (playerName === "Lisa") {
                        $("body").html(
                            '<p>Easter Egg Discovered!</p>' +
                            '<h1>Hi Lisa :)</h1>' +
                            '<h1>give me a muffin damnit</h1>' +
                            '<h1>Nice hat</h1>'
                        );
                        setTimeout(normalStart, 3000);
                    } else if (playerName === "Antonio") {
                        $("body").html(
                            '<p>Easter Egg Discovered!</p>' +
                            '<h1>Antonio! Sup brah</h1>' +
                            '<h1>lets kick it old school</h1>' +
                            '<h1>Go ahead and pull that A+ lever</h1>'
                        );
                        setTimeout(normalStart, 3000);
                    } else if (playerName === "Cole") {
                        $("body").html(
                            '<p>Easter Egg Discovered!</p>' +
                            '<h1>YOOOOO! Cole!</h1>' +
                            '<h1>Nice beard, man</h1>' +
                            "<h1>how's the weather up there? jk</h1>"
                        );
                        setTimeout(normalStart, 3000);
                    } else if (playerName === "Jedd") {
                        $("body").html(
                            '<p>Easter Egg Discovered!</p>' +
                            "<h1>'ello guv'nah</h1>" +
                            '<h1>Pip-pip, cheerio</h1>' +
                            "<h1>Let's throw anotha' shrimp own the barrrbie!</h1>"
                        );
                        setTimeout(normalStart, 3000);
                    } else {
                        normalStart();
                    }

                    playerName = playerName[0].toUpperCase() + playerName.slice(1);
                    console.log(playerName);

                    function normalStart() {
                        var startScreen =
                            '<h1>Boozie Trivia</h1>' +
                            '<div>' +
                            '<h2><p>Hello ' + playerName + '. </p> Click to start.</h2>' +
                            '</div>';

                        var readyToPlay =
                            '<h1>Boozie Trivia</h1>' +
                            '<div>' +
                            '<h2><p>Okay, ' + playerName + ', here comes the first question.</h2>' +
                            '</div>';

                        $("body").html(startScreen);
                        $("html").click(function() {
                            if (mode === "start") {
                                mode = "ask";
                                $("body").html(readyToPlay);
                                setTimeout(loop, readyWaitTime * 1000);
                                $("html").off("click");
                            }
                        })
                    }
                } else if (mode === "ask") { // Question------------------------------------------------------------------
                    var randomOrder = 0;
                    var answerRandomize = [0, 1, 2, 3];



                    answerRandomize = answerRandomize.sort(function(a, b) { // randomize the order of the answerRandomize variable
                        return 0.5 - Math.random();
                    });

                    console.log(answerRandomize.toString());

                    $("body").html(
                        '<h1>Boozie Trivia</h1>' +
                        '<div>' +
                        '<br>Question: ' + (questionNumber + 1) +
                        '<h2><p>' + question[questionNumber] + '</p></h2>' +
                        '</div>'
                    );
                    for (var i = 0; i < answer[questionNumber].length; i++) {
                        $("body").append(
                            '<div>' +
                            '<button type="button">' + answer[questionNumber][answerRandomize[i]] + '</button>' +
                            '</div>'
                        )
                    }

                    $("button").click(function() {
                        if ($(this).text() === answer[questionNumber][0]) {
                            console.log("Correct");
                            mode = "correct";
                            clearTimeout(questionTimer);
                            loop();
                        } else {
                            mode = "incorrect";
                            console.log("incorrect");
                            clearTimeout(questionTimer);
                            loop();
                        }
                    });
                    mode = "tooLong";
                    var questionTimer = setTimeout(loop, 1000 * answerTime);
                } else if (mode === "correct") { // Congratulations Screen------------------------------------------------
                    $("body").html(
                        '<h1>Boozie Trivia</h1>' +
                        '<div>' +
                        '<h2>Congratulations ' + playerName + '!</h2>' +
                        '<h3>You, sir or madam, are correct.</h3>' +
                        "<p>I love you man, you... you're great</p>" +
                        "<p>No no no, we don't say it enough man... I love you.</p>" +
                        '</div>'
                    );
                    if (questionNumber === (question.length - 1)) {
                        mode = "final";
                    } else {
                        mode = "ask";
                    }

                    questionNumber++;
                    correctAnswers++;
                    setTimeout(loop, 1000 * afterQuestionTime);
                } else if (mode === "incorrect") { // Wrong answer screen-------------------------------------------------
                    $("body").html(
                        '<h1>Boozie Trivia</h1>' +
                        '<div>' +
                        "<h2>Sorry, " + playerName + ", that is incorrect.</h2>" +
                        "<p>What! I'm wrong? im not wrong you're wrong!</p>" +
                        "<p>Dont tell me what I am. You dont know me!</p>" +
                        "<p>Wait, no, man, I'm sorry lets not fight</p>" +
                        "<p>I love you man, you... you're great</p>" +
                        '</div>'
                    );
                    if (questionNumber === (question.length - 1)) {
                        mode = "final";
                    } else {
                        mode = "ask";
                    }

                    questionNumber++;
                    incorrectAnswers++;
                    setTimeout(loop, 1000 * afterQuestionTime);
                } else if (mode === "tooLong") { // Timeout---------------------------------------------------------------
                    $("body").html(
                        '<h1>Boozie Trivia</h1>' +
                        '<div>' +
                        "<h2>Sorry, " + playerName + " you took too long.</h2>" +
                        "<p>Dude what the hell are you doing?</p>" +
                        "<p>What is taking you so long?</p>" +
                        "<p>Ugh! I'm never playing this stupid game with you again!</p>" +
                        "<p>Wait, no, man, I'm sorry lets not fight</p>" +
                        "<p>I love you man, you... you're great</p>" +
                        '</div>'
                    );
                    if (questionNumber === (question.length - 1)) {
                        mode = "final";
                    } else {
                        mode = "ask";
                    }

                    questionNumber++;
                    outOfTimeAnswers++;
                    setTimeout(loop, 1000 * afterQuestionTime);
                } else if (mode === "final") { // Final Screen------------------------------------------------------------
                    $("body").html(
                        '<h1>Boozie Trivia</h1>' +
                        '<div>' +
                        '<h2>Good Job, ' + playerName + ', lets see how you did.</h2>' +
                        '<p>Number of correct answers: ' + correctAnswers + '</p>' +
                        '<p>Number of incorrect answers: ' + incorrectAnswers + '</p>' +
                        '<p>Number of questions not answered: ' + outOfTimeAnswers + '</p>' +
                        '</div>'
                    );

                    $("html").on("click", function() {
                        mode = "start";
                        questionNumber = 0;
                        correctAnswers = 0;
                        incorrectAnswers = 0;
                        outOfTimeAnswers = 0;
                        loop();
                    });
                }

                function getName() {
                    playerName = prompt("Please pick a name.");
                    if (playerName === "" || playerName === null) {
                        if (playerName === "" || playerName === null) {
                            playerName = prompt("Sorry you need to pick a name.");
                            if (playerName === "" || playerName === null) {
                                playerName = prompt("Dude! pick a name!")
                                if (playerName === "" || playerName === null) {
                                    alert("Alright, fuck it your name is Potato. Nice to meet you Potato... dick.")
                                    playerName = "Potato";
                                }
                            } else {
                                playerName = playerName.trim();
                            }
                        } else {
                            playerName = playerName.trim();
                        }
                    } else {
                        playerName = playerName.trim();
                    }
                }
            }
        });