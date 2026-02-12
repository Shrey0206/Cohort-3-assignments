// let counter = 0 ;
// const intervalID = setInterval(() => {counter++ ;
//     console.log(counter) ;
//     if (counter > 10){
//         clearInterval(intervalID);
//     }
// }, 1000);



// let counter = 0;

// function counterfunction(){
//     console.log(counter);
//     counter++;
//     const timeoutID = setTimeout(counterfunction,1000);
// }

// counterfunction();


const fs = require("fs");
fs.readFile("./easy/3-read-from-file.md", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
