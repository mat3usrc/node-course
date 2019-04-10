const fs = require('fs');

//const book = {
//    title: 'Livro',
//    author: 'Mateus'
//}
//
//const bookJSON = JSON.stringify(book);
//
//fs.writeFileSync('1-json.json', bookJSON);

//const dataBuffer = fs.readFileSync('1-json.json');
//const dataJSON = dataBuffer.toString();
//const data = JSON.parse(dataJSON);
//console.log(data.author);

let data = fs.readFileSync('1-json.json').toString();
data = JSON.parse(data);

data.name = "Mateus";

const dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSON);

