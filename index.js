const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


tutorials.map(title => {
  words = title.split(' ');
  capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const newTitle = capitalizedWords.join(' ')
  return newTitle;
})

const titleCased = () => { // function titleCased() {
  return tutorials.map(title => { //Iterates the following code for each segment in "tutorials", taking in title as a variable
    const words = title.split(' ');  //for the variable title, split it into words
    const capitalizedWords = //Define a new word map as capitalizedWords
      words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); //Iterates capitalization of first letter for each word (which had been defined as a split of the title) ['Sdsfkal', 'Ljdslkjf', 'Slkjl', 'Sdsfkl']
    const newTitle = capitalizedWords.join(' '); //Joins the 
    return newTitle;
  });
}


/*//This function returns each individual word as a separate element in the array
for (let i=0; i<tutorials.length; i++){
  
  let initTitle = tutorials[i].split(' ') 
  //console.log(initTitle)// This would log the titles of the collection in different arrays
  let newWords = []
  for (let j=0; j<initTitle.length; j++) {
    firstLetter = initTitle[j][0].toUpperCase()
    remainningLetters = initTitle[j].slice(1)
    newWord = firstLetter + remainningLetters
    newWords.push(newWord)
    //console.log(newWord)
  }
  //console.log(newWords)
  let newTitles = newWords.join(' ')
  console.log(newTitles)
}





  //word = arrayofwords.split(' ')
  //console.log(word)

  


// Write a for loop to show the value of one tutorial

// Split the string in to different characters and call the toupper function on the first character (index 0 )

// Join the string back together with the toupper character

// Print the toupper string to the screen 

// Put the upper case string into a new tutorial array and return that tutorial array
*/