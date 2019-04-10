const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicates = notes.find(note => note.title === title);

    if (!duplicates) {
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log('New note saved');
    } else {
        console.log('Note title already taken!');
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const filtered = notes.filter(note => note.title !== title);

    if (notes.length === filtered.length) {
        console.log('Não tem nota com esse titulo')
    } else {
        saveNotes(filtered);
        console.log('Nota deletada');
    }
}

const readNote = (title) => {
    const note = loadNotes().find(note => note.title === title);

    if(note) {
        console.log(chalk.green(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes = () => {
    console.log(chalk.green('Your notes:'));
    loadNotes().map(note => console.log(note.title));
}

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));

const loadNotes = function() {
    try {
        const data = fs.readFileSync('notes.json').toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }    
}
 
module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}