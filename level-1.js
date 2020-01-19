 1.
 var pet = "monkey";
 console.log(pet);

 2.
 var person = {
    name: "Sean",
    age: 4
};

 3.
 var outOfStock = true;
 if(outOfStock === true) {
     console.log("Out of stock");
 }
 else {
     console.log("In stock");
 }

 4.
 var numbers = [3,4,5,6,7];

 console.log(3);
 console.log(4);
 console.log(5);
 console.log(6);
 console.log(7);

 5.
 for(var count = 15; count < 26; count++) {
    console.log(count);
 }

 6.
 for(var count = 15; count <= 20; count++) {
    console.log(count);
 }

 7.
 var animals = [
     {
     typeOfAnimal: "monkey",
     numberOfLeggs: 2,
     rightNumberOfLeggs: true
     },

      {
     typeOfAnimal: "donkey",
     numberOfLeggs: 3,
     rightNumberOfLeggs: false
     }
     ];
 console.log(animals);

 for (var i=0; i < animals.length; i++){
     console.log(animals[i].numberOfLeggs);
     console.log(animals[i].rightNumberOfLeggs);
 }

 8.
 function whatIDontLike(insect) {
     console.log(insect + " " + "spiders")     
 }

 whatIDontLike("I dont like")

 9.
 function twoNumbers(number1, number2) {
     var subtract = number1 - number2;
     console.log(subtract);
     
 }

 twoWords(38, 15);

 10.

 var movies = [];
 

 function moviesILike(marvel) {
    
  movies.push("i like films");  
 }

 moviesILike("I like");


 