var Alexa = require("alexa-sdk");

var states = {
    ASKMODE: "_ASKMODE" // Prompt the user to start or restart the game.
};

// Questions
var questions = [
    {
        message: "Ist das gesuchte Tier ein Haustier?",
        yes: "Haustier",
        question: "Welches Tier ein Haustier?"
    },
    {
        message: "Lebt das Tier auf einem Bauernhof?",
        yes: "Bauernhof",
        question: "Welches der Tiere lebt auf dem Bauernhof?"
    },
    {
        message: "Lebt das gesuchte Tier im Wald?",
        yes: "Wald",
        question: "Welches Tier lebt im Wald?"
    },
    {
        message: "Ist das gesuchte Tier ein Säugetier?",
        yes: "Säugetier",
        question: "Welches der Tiere ist ein Säugetier?"
    },
    {
        message: "Ist das gesuchte Tier ein Vogel?",
        yes: "Vogel",
        question: "Welches der Tiere ist ein Vogel?"
    },
    {
        message: "Ist das gesuchte Tier ein Fleischfresser?",
        yes: "Fleischfresser",
        question: "Welches der Tiere ist ein Fleischfresser?"
    },
    {
        message: "Ist das gesuchte Tier ein Allesfresser?",
        yes: "Allesfresser",
        question: "Welches Tier ist ein Allesfresser?"
    },
    {
        message: "Ist das gesuchte Tier ein Pflanzenfresser?",
        yes: "Pflanzenfresser",
        question: "Welches Tier ist ein Pflanzenfresser?"
    },
    {
        message: "Ist das gesuchte Tier ein Insektenfresser?",
        yes: "Insektenfresser",
        question: "Welches Tier ist ein Insektenfresser?"
    },
    {
        message: "Ist das gesuchte Tier ein Aasfresser?",
        yes: "Aasfresser",
        question: "Welches Tier ist ein Aasfresser?"
    },
    {
        message: "Gehört das gesuchte Tier zur Gattung der Katzen?",
        yes: "Katze",
        question: "Welches Tier gehört zur Gattung der Katzen?"
    },
    {
        message: "Gehört das gesuchte Tier zur Gattung der Pferde?",
        yes: "Pferde",
        question: "Welches Tier gehört zur Gattung der Pferde?"
    },
    {
        message: "Hat das gesuchte Tier einen Rüssel?",
        yes: "Rüssel",
        question: "Welches Tier hat einen Rüssel?"
    },
    {
        message: "Kann das gesuchte Tier fliegen?",
        yes: "Fliegt",
        question: "Welches der Tiere kann fliegen?"
    },
    {
        message: "Hat das gesuchte Tier ein Fell?",
        yes: "Fell",
        question: "Welches Tier hat ein Fell?"
    },
    {
        message: "Hat das gesuchte Tier Federn?",
        yes: "Gefieder",
        question: "Welches der Tiere hat Federn?"
    },
    {
        message: "Hat das gesuchte Tier Schuppen?",
        yes: "Schuppen",
        question: "Welches der Tiere hat Schuppen?"
    },
    {
        message: "Hat das gesuchte Tier Hufe?",
        yes: "Hufe",
        question: "Welches der Tiere hat Hufe?"
    },
    {
        message: "Gibt das gesuchte Tier Milch?",
        yes: "Milch",
        question: "Welches Tier gibt Milch?"
    },
    {
        message: "Hat das gesuchte Tier große Ohren?",
        yes: "Große Ohren",
        question: "Welches Tier hat große Ohren?"
    },
    {
        message: "Hat das gesuchte Tier Hörner?",
        yes: "Hörner",
        question: "Welches Tier hat Hörner?"
    },
    {
        message: "Kann man Wolle aus dem Fell herstellen?",
        yes: "Wolle",
        question: "Bei welchen Tier kann man Wolle aus dem Fell herstellen?"
    },
    {
        message: "Ist das gesuchte Tier nachtaktiv?",
        yes: "Nachtaktiv",
        question: "Welches der Tiere ist nachtaktiv?"
    },
    {
        message: "Ist das gesuchte Tier kleiner als ein Hund?",
        yes: "Klein",
        question: "Welches Tier ist kleiner als ein Hund?"
    },
    {
        message: "Ist das gesuchte Tier größer als ein Hund?",
        yes: "Groß",
        question: "Welches Tier ist ein größer als ein Hund?"
    },
    {
        message: "Lebt das gesuchte Tier im Meer?",
        yes: "Meer",
        question: "Welches der Tiere lebt im Meer?"
    },
    {
        message: "Ist das gesuchte Tier ein Fisch?",
        yes: "Fisch",
        question: "Welches der Tiere ist ein Fisch?"
    },
    {
        message: "Lebt das gesuchte Tier im Rudel?",
        yes: "Rudel",
        question: "Welches der Tiere lebt im Rudel?"
    },
    {
        message: "Lebt das gesuchte Tier in Europa?",
        yes: "Europa",
        question: "Welches der Tiere lebt in Europa?"
    },
    {
        message: "Lebt das gesuchte Tier in Asien?",
        yes: "Asien",
        question: "Welches der Tiere lebt in Asien?"
    },
    {
        message: "Lebt das gesuchte Tier in Afrika?",
        yes: "Afrika",
        question: "Welches der Tiere lebt in Afrika?"
    },
    {
        message: "Lebt das gesuchte Tier in Amerika?",
        yes: "Amerika",
        question: "Welches der Tiere lebt in Amerika?"
    },
    {
        message: "Lebt das gesuchte Tier in der Arktis?",
        yes: "Arktis",
        question: "Welches der Tiere lebt in der Arktis?"
    },
    {
        message: "Lebt das gesuchte Tier in der Antarktis?",
        yes: "Antarktis",
        question: "Welches der Tiere lebt in der Antarktis?"
    },
    {
        message: "Lebt das gesuchte Tier in Australien?",
        yes: "Australien",
        question: "Welches der Tiere lebt in Australien?"
    }
];

// Answers
var answers = [
    {
        message: "Hund",
        yes: [
            "Haustier",
            "Säugetier",
            "Fleischfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell"
        ]
    },
    {
        message: "Katze",
        yes: [
            "Haustier",
            "Säugetier",
            "Fleischfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Katze",
            "Klein",
            "Nachtaktiv"
        ]
    },
    {
        message: "Meerschweinchen",
        yes: [
            "Haustier",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Hamster",
        yes: [
            "Haustier",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Nachtaktiv",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Zwergkaninchen",
        yes: [
            "Haustier",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Große Ohren",
            "Klein"
        ]
    },
    {
        message: "Goldfisch",
        yes: [
            "Haustier",
            "Fisch",
            "Allesfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Schuppen",
            "Klein"
        ]
    },

    {
        message: "Schaf",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Hufe",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Fell",
            "Wolle",
            "Groß"
        ]
    },
    {
        message: "Ziege",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Milch",
            "Hufe",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Pflanzenfresser",
            "Rudel",
            "Fell",
            "Hörner",
            "Groß"
        ]
    },
    {
        message: "Kuh",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Milch",
            "Hufe",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Pflanzenfresser",
            "Rudel",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Pferd",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Pferde",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Hufe",
            "Pflanzenfresser",
            "Rudel",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Esel",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Pferde",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Hufe",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Schwein",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Allesfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Hufe",
            "Groß"
        ]
    },
    {
        message: "Rind",
        yes: [
            "Bauernhof",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Hufe",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Huhn",
        yes: [
            "Bauernhof",
            "Vogel",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Allesfresser",
            "Gefieder",
            "Klein"
        ]
    },

    {
        message: "Kaninchen",
        yes: [
            "Wald",
            "Große Ohren",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Hase",
        yes: [
            "Wald",
            "Große Ohren",
            "Säugetier",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Fuchs",
        yes: [
            "Wald",
            "Fleischfresser",
            "Säugetier",
            "Nachtaktiv",
            "Europa",
            "Asien",
            "Australien",
            "Amerika",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Dachs",
        yes: [
            "Wald",
            "Allesfresser",
            "Säugetier",
            "Nachtaktiv",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Igel",
        yes: [
            "Wald",
            "Allesfresser",
            "Säugetier",
            "Nachtaktiv",
            "Europa",
            "Asien",
            "Afrika",
            "Klein"
        ]
    },
    {
        message: "Maus",
        yes: [
            "Wald",
            "Allesfresser",
            "Nachtaktiv",
            "Säugetier",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Wolf",
        yes: [
            "Wald",
            "Säugetier",
            "Fleischfresser",
            "Europa",
            "Asien",
            "Amerika",
            "Rudel",
            "Nachtaktiv",
            "Fell"
        ]
    },
    {
        message: "Reh",
        yes: [
            "Wald",
            "Rudel",
            "Hufe",
            "Europa",
            "Asien",
            "Amerika",
            "Säugetier",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },
    //{ "message": "Ratte", "yes": ["Haustier", "Wald"]},
    {
        message: "Adler",
        yes: [
            "Vogel",
            "Fliegt",
            "Amerika",
            "Fleischfresser",
            "Gefieder",
            "Klein"
        ]
    },
    {
        message: "Möwe",
        yes: [
            "Vogel",
            "Allesfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fliegt",
            "Gefieder",
            "Klein"
        ]
    },
    {
        message: "Taube",
        yes: [
            "Vogel",
            "Pflanzenfresser",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Rudel",
            "Fliegt",
            "Gefieder",
            "Klein"
        ]
    },
    {
        message: "Geier",
        yes: [
            "Vogel",
            "Aasfresser",
            "Fliegt",
            "Europa",
            "Asien",
            "Afrika",
            "Gefieder",
            "Klein"
        ]
    },
    {
        message: "Eule",
        yes: [
            "Vogel",
            "Fleischfresser",
            "Europa",
            "Asien",
            "Fliegt",
            "Gefieder",
            "Nachtaktiv",
            "Europa",
            "Asien",
            "Klein"
        ]
    },

    {
        message: "Löwe",
        yes: [
            "Afrika",
            "Säugetier",
            "Fleischfresser",
            "Katze",
            "Rudel",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Erdmännchen",
        yes: ["Afrika", "Säugetier", "Fleischfresser", "Rudel", "Fell", "Klein"]
    },
    {
        message: "Affe",
        yes: [
            "Afrika",
            "Amerika",
            "Säugetier",
            "Allesfresser",
            "Rudel",
            "Fell",
            "Klein"
        ]
    },
    {
        message: "Elefant",
        yes: [
            "Afrika",
            "Asien",
            "Rüssel",
            "Rudel",
            "Große Ohren",
            "Säugetier",
            "Pflanzenfresser",
            "Groß"
        ]
    },
    {
        message: "Giraffe",
        yes: [
            "Afrika",
            "Hufe",
            "Rudel",
            "Säugetier",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Gnu",
        yes: [
            "Afrika",
            "Hufe",
            "Rudel",
            "Hörner",
            "Säugetier",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },
    {
        message: "Zebra",
        yes: [
            "Afrika",
            "Pferde",
            "Hufe",
            "Rudel",
            "Säugetier",
            "Pflanzenfresser",
            "Fell",
            "Groß"
        ]
    },

    {
        message: "Tiger",
        yes: [
            "Asien",
            "Säugetier",
            "Fleischfresser",
            "Katze",
            "Fell",
            "Nachtaktiv",
            "Groß"
        ]
    },

    {
        message: "Ameisenbär",
        yes: [
            "Amerika",
            "Säugetier",
            "Insektenfresser",
            "Fell",
            "Wald",
            "Klein"
        ]
    },

    {
        message: "Bär",
        yes: [
            "Säugetier",
            "Allesfresser",
            "Amerika",
            "Asien",
            "Europa",
            "Nachtaktiv",
            "Fell",
            "Wald",
            "Groß"
        ]
    },

    {
        message: "Nilpferd",
        yes: [
            "Säugetier",
            "Pflanzenfresser",
            "Afrika",
            "Nachtaktiv",
            "Rudel",
            "Groß"
        ]
    },

    {
        message: "Pinguin",
        yes: [
            "Vogel",
            "Antarktis",
            "Fleischfresser",
            "Rudel",
            "Gefieder",
            "Klein"
        ]
    },

    {
        message: "Eisbär",
        yes: ["Säugetier", "Arktis", "Fleischfresser", "Fell", "Groß"]
    },

    {
        message: "Delfin",
        yes: [
            "Meer",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Säugetier",
            "Rudel",
            "Fleischfresser",
            "Groß"
        ]
    },
    {
        message: "Wal",
        yes: [
            "Meer",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Säugetier",
            "Pflanzenfresser",
            "Groß"
        ]
    },
    {
        message: "Hai",
        yes: [
            "Meer",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fisch",
            "Fleischfresser",
            "Groß"
        ]
    },
    {
        message: "Clownfisch",
        yes: [
            "Meer",
            "Europa",
            "Asien",
            "Afrika",
            "Amerika",
            "Australien",
            "Fisch",
            "Allesfresser",
            "Klein",
            "Schuppen"
        ]
    }
];

// This is the intial welcome message
var welcomeMessage = "Willkommen beim Tierquiz.";

// this is the help message during the setup at the beginning of the game
var helpMessage = "Ich stelle Fragen und du musst das gesuchte Tier nennen.";

// This is the goodbye message when the user has asked to quit the game
var goodbyeMessage = "Tschüss";

// --------------- Handlers -----------------------

// Called when the session starts.
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = process.env.APP_ID;
    alexa.appId = alexa.APP_ID;
    alexa.registerHandlers(newSessionHandler, askQuestionHandlers);
    alexa.execute();
};

// set state to start up and  welcome the user
var newSessionHandler = {
    NewSession: function() {
        this.handler.state = states.ASKMODE;

        helper.logUser(this);

        if (Object.keys(this.attributes).length === 0) {
            this.attributes["answerCount"] = 0;
            this.attributes["asked"] = null;
            this.attributes["answer"] = null;
        }
        var question = helper.getNextQuestion(this);
        this.emit(":ask", welcomeMessage + " " + question, question);
    },
    "AMAZON.HelpIntent": function() {
        this.handler.state = states.ASKMODE;
        this.emit(":ask", helpMessage, helpMessage);
    },
    Unhandled: function() {
        this.handler.state = states.ASKMODE;
        var question = questions[this.attributes["asked"]];
        this.emit(
            ":ask",
            "Das habe ich leider nicht verstanden. " + question,
            helpMessage
        );
    }
};

// user will have been asked a question when this intent is called. We want to look at their yes/no
// response and then ask another question. If we have asked more than the requested number of questions Alexa will
// make a choice, inform the user and then ask if they want to play again
var askQuestionHandlers = Alexa.CreateStateHandler(states.ASKMODE, {
    NewSession: function() {
        this.handler.state = "";
        this.emitWithState("NewSession");
    },
    AnimalIntent: function() {
        var animalSlot = this.event.request.intent.slots.Animal;
        var animalName;
        if (animalSlot && animalSlot.value) {
            animalName = animalSlot.value.toLowerCase();
        }
        var question = questions[this.attributes["asked"]];

        var correct = this.attributes["correct"];
        var animal;
        if (correct && animalName == correct.message.toLowerCase()) {
            animal = correct;
        }

        var newQuestion = helper.getNextQuestion(this);

        if (question && animal && animal.yes.indexOf(question.yes) >= 0) {
            this.attributes["answerCount"] = this.attributes["answerCount"] + 1;
            var numCorrect = "";
            if (this.attributes["answerCount"] % 5 === 0) {
                numCorrect =
                    "Du hast insgesamt schon " +
                    this.attributes["answerCount"] +
                    " Fragen richtig beantwortet. ";
            }
            var text =
                "Richtig! " +
                numCorrect +
                "Hier die nächste Frage: " +
                newQuestion;
            this.emit(":ask", text, text);
        } else {
            var text = "Das war leider falsch! ";
            if (correct && correct.message) {
                text +=
                    "Die richtige Antwort lautet: " + correct.message + ". ";
            }
            text += "Hier die nächste Frage: " + newQuestion;
            this.emit(":ask", text, text);
        }
    },
    "AMAZON.HelpIntent": function() {
        this.handler.state = states.ASKMODE;
        var question = questions[this.attributes["asked"]];
        this.emit(
            ":ask",
            helpMessage + "Hier die Frage: " + question,
            helpMessage
        );
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", goodbyeMessage);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", goodbyeMessage);
    },
    Unhandled: function() {
        this.handler.state = states.ASKMODE;
        var question = questions[this.attributes["asked"]];
        this.emit(
            ":ask",
            "Das habe ich leider nicht verstanden. " + question,
            helpMessage
        );
    }
});

// --------------- Helper Functions  -----------------------

var helper = {
    logUser: function(context) {
        if (
            context &&
            context.event &&
            context.event.session &&
            context.event.session.user
        ) {
            console.log(
                "User: ",
                context.event.session.sessionId,
                context.event.session.user.attributes,
                context.attributes
            );
        } else {
            console.log("Failed to get userId");
        }
    },

    shuffle: function(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    getNextQuestion: function(context) {
        // set state to asking questions
        context.handler.state = states.ASKMODE;

        // ask first question, the response will be handled in the askQuestionHandler
        var question = helper.getRandomQuestion(context);

        context.attributes["asked"] = questions.indexOf(question);

        var found = 0;
        var possAnswers = [];

        while (possAnswers.length < 4) {
            var answer = answers[Math.floor(Math.random() * answers.length)];

            if (possAnswers.length == 0) {
                if (answer.yes.indexOf(question.yes) >= 0) {
                    possAnswers.push(answer);
                }
            } else if (
                answer.yes.indexOf(question.yes) < 0 &&
                possAnswers.indexOf(answer) < 0
            ) {
                possAnswers.push(answer);
            }
        }
        context.attributes["correct"] = possAnswers[0];

        possAnswers = helper.shuffle(possAnswers);
        var text = "";
        possAnswers.map((item, index) => {
            text +=
                (index > 0 && index < 3 ? ", " : index > 2 ? " oder " : "") +
                item.message;
        });

        return question.question + " " + text;
    },

    // returns the speech for the provided node id
    getRandomQuestion: function(context) {
        var question = questions[Math.floor(Math.random() * questions.length)];
        return question;
    }
};

//Local question debug
/*
this.attributes = {}
this.attributes["answered"] = {};
console.log(helper.getNextQuestion(this));
console.log(helper.getNextQuestion(this));
console.log(helper.getNextQuestion(this));
console.log(helper.getNextQuestion(this));
console.log(helper.getNextQuestion(this));
console.log(helper.getNextQuestion(this));

*/
