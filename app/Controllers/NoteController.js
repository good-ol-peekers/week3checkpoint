import { Pop } from "../Utils/Pop.js"
import { getFormData } from "../Utils/FormHandler.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { noteService } from "../Services/NoteService.js"


function _drawNewNote(){
    // console.log("drawingNotes")
let freshNote = appState.Notes
let template = ''
freshNote.forEach(c => template += c.freshNote) 
    setHTML('newNoteHTML', template)

}

function _setActiveNote(){
    let setUpNote = appState.activeNote
    
    setHTML('activeNote', setUpNote.activeNote)
}
export class NoteController{

    constructor() {
        console.log("hello from the controller")
        _drawNewNote()
        appState.on('Notes', _drawNewNote)
        appState.on('activeNote', _setActiveNote)

    }
    
    createNote(){

        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            console.log(formData, "this is the new note")
            form.reset()
            noteService.createNewNote(formData)
        } catch (error) {
            Pop.error(error.message)
            console.error(error);
        }
    }

    updateActiveNote(){
        try {
            let journalEntry = document.getElementById('journal')
            let updatedNote = journalEntry.value
            // console.log(updatedNote, 'does this work?')
        // journalEntry.value = 'test'
        noteService.updateActiveNote(updatedNote)
            console.log("called create active note")
            console.log(updatedNote)
        } catch (error) {
            console.error(error)
        }
    }

setNote(noteId){
    try {
        noteService.setNote(noteId)
        
    } catch (error) {
        
    }
}
async deleteNote(noteId){

    try {
        const yes = await Pop.confirm('sure you want to delete your note?')
        if (!yes) {return}
        noteService.deleteNote(noteId)
    } catch (error) {
        
    }
}
}



