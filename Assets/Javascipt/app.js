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
    answers: ["Max", "Binx", "Allison","Sarah", "Dani"],
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