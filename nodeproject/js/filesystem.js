const fs = require("fs");

const data = fs.readFileSync("./text.txt", "utf-8");
console.log("Sync File", data);
fs.readFile("./text.txt", "utf-8", (err, data) => {
    if(err){
        console.error("error reading",err);
        return;
    }
    console.log("file contents:",data);
});


// const content = 'hello ma txt file bata text boleko';

// to replace the txt
// try {
//     fs.writeFileSync('/Users/joe/test.txt', content);
//     // file written successfully
//   } catch (err) {
//     console.error(err); 
//   }



// to add some text to file by append
// fs.appendFile('text.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }       
// }); 