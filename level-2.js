1.
for (i = 15; i < 25; i++) {
    if (i % 2 === 0) {
      console.log(i);  
    }
  }

 2.
 function innerFunction(inner) {
    console.log(inner);
 }
 innerFunction("I am a function")

 function outerFunction(outer) {
    console.log(outer);
 }
 outerFunction("I am not a function")