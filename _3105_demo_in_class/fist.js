var x = 10;
x = x * 5;
// console.log("Gia tri cua x: " + x);

function display(x){
    console.log("Gia tri cua x: " + x);
}

display(x);

var fs = require("fs");
// fs.readFile('HelloGit.txt', 'utf-8', (err, data) => {
//     console.log("Du lieu tu file:")
//     console.log(data)
// });

var content = fs.readFileSync('HelloGit.txt', 'utf-8')
    console.log("Du lieu tu file:")
    console.log(content)

console.log("The last??")