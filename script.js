// Rock paper cisor game

console.log ("testing js, saying hello world");



function humanChoice() {
    // Prompt windows to ask to player enter choice
    const doChoice = prompt("Rock paper or cisor?", )
    const choice = doChoice;
  
  } 
  
  // Call the function to log a random word
  humanChoice();




const words = ["Rock", "Paper", "Cisor"];

function computerChoice() {
  // Generate a random index within the range of the words array
  const randomChoice = Math.floor(Math.random() * words.length);
  // Get the word at the random index
  const randomWord = words[randomChoice];
  // Log the random word to the console
  console.log("Random Word:", randomWord);
}

// Call the function to log a random word
computerChoice();




  if (computerChoice == humanChoice){
    console.log("mactch nul")
} 
else{
        console.log ("no")
    
  }


  
