const fs = require('fs')
const chalk = require('chalk')
const getNotes =  () => {
    return 'Your notes........\n'
}
const addNote = (title,body) => {
    const notes= loadNotes()
   // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    // const duplicateNotes = notes.filter(function(note)
    // {
    //  return note.title === title    
    // })
    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log(chalk.red('note title taken'))
    }

   
 

    
}
const saveNotes = (notes)=>{
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJSON)
    }

const loadNotes = ()=>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const  dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e) {
        return[]
    }
    
    
}
 const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title === title)

    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('note removed'))

    } else {
        console.log(chalk.red.inverse('no note found'))

    }
    saveNotes(notesToKeep)
 }

  const listNotes = () =>{
      const notes = loadNotes()
      console.log(chalk.inverse.green('Your NOtes'))
      notes.forEach((note)=>{
          console.log(chalk.bold.blue(note.title))
      })
  }
  const readNote = (title)=>{
      const notes=loadNotes()
      console.log('presenting your node')
      const note = notes.find((note)=>note.title===title)
      if(note){
          console.log(chalk.inverse(note.title))
          console.log(note.body)
      }     
       else{
          console.log(chalk.red.inverse("not found"))
      }
  }
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}