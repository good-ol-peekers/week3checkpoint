import { Pop } from "../Utils/Pop.js"
import { getFormData } from "../Utils/FormHandler.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { noteService } from "../Services/NoteService.js"


function _drawNewNote(){
    console.log("drawingNotes")
let freshNote = appState.newNote
let template = ''
freshNote.forEach(c => template += c.freshNote) 
    setHTML('newNote', template)

}

function _setActiveNote(){
    console.log('setting active note')
    let activeNote = 
    setHTML('activeNote', template)
}

export class NoteController{

    constructor() {
        console.log("hello from the controller")
        _drawNewNote()
        appState.on('newNote', _drawNewNote)

    }
    
    createNote(){

        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            console.log(formData)
            form.reset()
            noteService.createNewNote(formData)
        } catch (error) {
            Pop.error(error.message)
            console.error(error);
        }
    }

    createActiveNote(){
        try {let journalEntry = document.getElementById(journal)
            noteService.createActiveNote(journalEntry)
            
        } catch (error) {
            console.error(error)
        }
    }



}