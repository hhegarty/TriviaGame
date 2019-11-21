// Create Variables needed.....
var card = $("#quiz-area");
var countStartNumber = 30;

// Questions here.....
var questions = [{
    question: "In 1969 Salem, Massachusets, Thackery finds his sister Emily at the Sanderson sisters cottage. The sisters use her for a spell to do what? ",
    answers: ["Cure their colds", "Steal her youth", "Throw the party of the century", "Talk to the dead"],
    correctAnswer: "Steal her youth",
    image: "Assets/Images/sisters.gif"
}, {
    question: "The Sanderson sisters are infamous in Salem history. What are their names?",
    answers: ["Paricia, Sarah, and Mildred", "Sarah, Winifred, and Jane", "Sarah, Winifred and Mary", "Megan, Willow and Sam"],
    correctAnswer: "Sarah, Winifred and Mary",
    image: "Assets/Images/threesisters.gif"
}, {
    question: "Who says the following quote 'Legend has it that the bones of a hundred children are burried within these walls'?",
    answers: ["Max", "Binx", "Allison", "Sarah", "Dani"],
    correctAnswer: "Allison",
    image: "Assets/Images/allison.gif"
}, {
    question: "When Michael Myers was a little boy what costumer did he wear for Halloween?",
    answers: ["Clown", "Alien", "Hockey Player", "Pirate"],
    correctAnswer: "Clown",
    image: "Assets/Images/mmclown.gif"
}, {
    question: "What character's mask was Michael's made out of?",
    answers: ["Norman Bates from Psycho", "Captain Kirk from Star Trek", "The Blob", "Alfred Hitchcock"],
    correctAnswer: "Captain Kirk from Star Trek",
    image: "Assets/Images/stab.gif"
}, {
    question: "In Hannibal, the hit series that aired in 2013, What was the nickname of the first serial killer Lecter helped the FBI track down?",
    answers: ["Slasher", "Beeman", "Buffalo Bill", "Tooth Fairy"],
    correctAnswer: "Tooth Fairy",
    image: "Assets/Images/fbi.gif"
}, {
    question: "Why is Francis Dolarhyde called the Tooth Fairy?",
    answers: ["He sneaks into the rooms of young children", "Although he's not a cannibal he has an obsession with biting his victim with a special set of false teeth", "He pulls teeth from his victim's mouths and leaves silver dollars wedged in their jaws"],
    correctAnswer: " Although he's not a cannibal he has an obsession with biting his victim with a special set of false teeth",
    image: "Assets/Images/bite.gif"
}, {
    question: "What incident is the origin of Lecter's mental state and interest in cannibalism?",
    answers: ["He saw a documentary about animals that sometimes eat their own to preserve scarce resources", "He saw the movie 'Cannibal Ferox' in 1983 which influenced him", "He witnessed his sister killed and eaten by Lithuanian militia at the end of World War 2 (and may have unknowingly eaten some of her himself"],
    correctAnswer: "He witnessed his sister killed and eaten by Lithuanian militia at the end of World War 2 (and may have unknowingly eaten some of her himself",
    image: "Assets/Images/vegetarian.gif"
}];

// Variable to hold time.....
var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,

    // Create count down.....
    countdown: function () {
        this.counter--;
        $("#counter-number").text(this.counter);
        if (this.counter === 0) {
            console.log("Time up");
            this.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(this.countdown.bind(this), 1000);
        card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            card.append("<buton class= 'answer-button' id= 'button' data-name='" + questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + "</button>");

        }
    },
    nextQuestion: function() {
        this.counter = window.countStartNumber;
        $("#counter-number").text(this.counter);
        this.currentQuestion++;
        this.loadQuestion.bind(this)();
      },
    
      timeUp: function() {
    
        clearInterval(window.timer);
    
        $("#counter-number").text(this.counter);
    
        card.html("<h2>Out of Time!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        card.append("<img src='" + questions[this.currentQuestion].image + "' />");
    
        if (this.currentQuestion === questions.length - 1) {
          setTimeout(this.results, 3 * 1000);
        }
        else {
          setTimeout(this.nextQuestion, 3 * 1000);
        }
      },
    
      results: function() {
    
        clearInterval(window.timer);
    
        card.html("<h2>All done, heres how you did!</h2>");
    
        $("#counter-number").text(this.counter);
    
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        card.append("<br><button id='start-over'>Start Over?</button>");
      },
      
    // Register if its correct or not.....

      clicked: function(e) {
        clearInterval(window.timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
          this.answeredCorrectly();
        }
        else {
          this.answeredIncorrectly();
        }
      },
    // If incorrect notify and display correct answer.....
    
      answeredIncorrectly: function() {
    
        this.incorrect++;
    
        clearInterval(window.timer);
    
        card.html("<h2>Nope!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
        card.append("<img src='" + questions[this.currentQuestion].image + "' />");
    
        if (this.currentQuestion === questions.length - 1) {
          setTimeout(this.results.bind(this), 3 * 1000);
        }
        else {
          setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
      },
    
      answeredCorrectly: function() {
    
        clearInterval(window.timer);
    
        this.correct++;
    
        card.html("<h2>Correct!</h2>");
        card.append("<img src='" + questions[this.currentQuestion].image + "' />");
    
        if (this.currentQuestion === questions.length - 1) {
          setTimeout(this.results.bind(this), 3 * 1000);
        }
        else {
          setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
      },
    // Create a reset.....
      reset: function() {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
      }
    };
    
    // Create click events.....
    
    $(document).on("click", "#start-over", game.reset.bind(game));
    
    $(document).on("click", ".answer-button", function(e) {
      game.clicked.bind(game, e)();
    });
    
    $(document).on("click", "#start", function() {
      $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
      game.loadQuestion.bind(game)();
    });
    