var readLineSync  = require('readline-sync');
var score = 0;
var userName = readLineSync.question('What is Your Name: ');
console.log('Welcome ' + userName + " to DO YOU KNOW Syed Andleeb");
console.log("Each Correct answer will give you 1 point\nand each wrong answer will decrement your score by 1 point \nSo let's Start:");


var highScorers =[ {
  name : 'myself',
  score : 5
}]
// play function
function play(question , answer){

  var userResponse = readLineSync.question(question);

  if (userResponse.toUpperCase() == answer.toUpperCase()){
    console.log("You are right");
    score = score + 1;
  }else{
    console.log("You are Wrong.Right answer is: ",answer);
    score = score - 1;

  }
  console.log("Current Score: ",score);
  console.log('-----------------');
} 

// creating objects 
var favSong = {
question : "What's my Favorite Song? ", 
answer : "Thousand Years" 
}

var favColor = {
question : "My Favorite Color? ",
answer : "Grey"
}

var movie = {
question : "My Fav Movie? ", 
answer : "Ironman"
}

var movieGenre = {
question : "My Favorite Movie Genre? ",
answer : "Science Fiction"
}
var superhero = {
question : "My Favorite Superhero? ",
answer : "IronMan"
}

var tvShow = {
question : "My Favorite TV Show? ",
answer : "Friends"
}
var mood = {
  question : "Do i Like Rain or Sun? ",
  answer : "rain"
}


// array of objects
var arrayOfQuestions = [favSong,favColor,movie,movieGenre,superhero,tvShow,mood]

// iterate over array ofobjects and call play function each time
for(var i = 0 ; i<arrayOfQuestions.length ; i++){
 play(arrayOfQuestions[i].question,arrayOfQuestions[i].answer);
}
// questions end .Give user his score
console.log("That's It!!.Thanks For Playing "+ userName +"\nYour Total Score is " + score + " out of 7");


// for high highScorers
console.log('High Scorers:');
for (i=0;i<highScorers.length;i++){
  console.log('Name: '+highScorers[i].name + "\n" + "Score: "+highScorers[i].score);
  console.log("------------------------");
}

// bonus exersice
function CheckHighScore(highScorers,score){
  for (i=0;i<highScorers.length;i++){
    if(score>=highScorers[i].score){
      console.log("Congratulations!!you have made the highest score\nSend me the Screenshot and i will update your name in the above list.\nTHANK YOU!!");
    }
  }
}
//function call
CheckHighScore(highScorers,score);