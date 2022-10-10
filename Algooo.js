console.time();
let count = 0;
let average = [];
let guess;
const letsInWord = [
'a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
let word = '';
let tries = 0;
function wordGame(werd){
    word = werd;
    while (true){
        if (word.length > 7){
            let jom = word.length;
            let powerTo = (26**jom);
            console.log(`That word is too big for it to be run fast but if it was run it would take around ${powerTo} tries`);
            break;
        }
        let currGuess = (wordlength());
        guess = currGuess;
        count++;
        if (guess === word){
            //console.log(`It took about ${count} tries to get '${word}' B)`);
            average.push(count);
            count = 0;
            tries++;
            break;
        }
    }
}
//wordgame is the function that checks if the guessed word is the word put in parameters
function wordlength(){
    let x = word.length;
    let currGuess = '';
    let array = []
    for (let i = 0; i < x; i++){
        array.push(letter());
    }
    currGuess = array.join('');
    
    if (currGuess.length === x){
        return currGuess;
    }
}
//wordlength adds up all the letters from the letter function and turns it into a whole word
function letter(){
    let rando = Math.floor(Math.random() * 26);
    let letter = numToLetter(rando);
    return letter;
}
//letter chooses a random number in the alphabet and puts it in numToLetter's parameter
function numToLetter(number){
    let letter = letsInWord[number];
    return letter;
}
// numToletter gets a letter based on the number given to it



//THIS PORTION CAN BE CUT OUT AND INSTEAD USE THE FUNCTION ALONE---------------------------------
while (tries <= 1000){
    wordGame('joe');
}
//This while function guesses until the total quota is reached

const added = average.reduce((num, secnum) => {
    return Math.floor((num + secnum));
});
// the added is just all the tries added up
const avg = Math.floor(added/average.length);
console.log(`${avg} is the average of all`);
//this averages all the guesses

//THIS IS THE END OF THE CUTTABLE PORTION REMEMBER TO USE wordGame('word') AS WELL AS REMOVING THE
// COMMENT SLASHINGS IN LINE 23 TO GET THE TOTAL TRIES--------------------------------------------

console.timeEnd();
