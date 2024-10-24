console.log(`1.Relace the substring “World!” with “My Dear Friend”..`);

let str="Hello World!";
let replaced_str=str.replace("World!","My Dear Friend...")
console.log(`The replaced string is:`,replaced_str)


console.log(`2.Repeat the “Hungry” for 10 times`)

let a="Hungry  ";
let b=a.repeat(10);
console.log(`The repeating string 10times:`,b);


console.log(`3.Find the last index of the string “fox”`)

let sentence=`The quick brown fox jumps over the lazy dog.
The fox is clever`
let last_index=sentence.lastIndexOf(`fox`);
console.log(`The last index of the fox is:`,last_index);



console.log(`4.Find the string starts with “hi”`);

let message="Hello,World!";
let str_starts=message.startsWith("hi");
console.log(`The string starts with hi:`,str_starts);


console.log(`5.Find the string ends with “.pdf`);

let filename="document.pdf";
let str_end=filename.endsWith(".pdf")
console.log(`The string ends with .pdf:`,str_end);







