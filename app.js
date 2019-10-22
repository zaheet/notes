const chalk = require('chalk')
const notes = require('./note.js')
const yargs = require('yargs')

//cusotmize yargs version
yargs.version('1.0.0')

//creating add cmd
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            body:{
                describe:'body of note',
                demandOption:true,
                type:'string'
            }
        }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }


})
yargs.command({
    command:'remove',
    describe: 'removing a note',
    builder: {
        title:{
        describe:'note title',
        demandOption: true,
        type:'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe: 'listing a note',
    handler(argv){
        notes.listNotes(argv)
    }
})

yargs.command({
    command:'read',
    describe: 'reading a note',
    builder:{
        title:{
            describe:'note read',
            demandOption:true,
            type:'String'
        }
    },
    handler (argv){
        console.log('reading bro')
        notes.readNote(argv.title)
    }
})

//add,remove,read,list
yargs.parse()
//console.log(yargs.argv)
















// if (command === 'add'){
//     console.log('adding note')
// } else if (command === 'remove'){
//     console.log('removing')
// }
















//const msg = getNotes()
//console.log(msg)
//const greenmsg = chalk.bgBlue.bold.underline.green('xyz')
//console.log(greenmsg)
//console.log(process.argv[2])




















// const add = require('./utils')
// const sum = add(1,2)
// console.log(sum)

// console.log('utils.js')
// const name='mike'
// const add = function (a,b){
//     return a+b
// }
// module.exports = add