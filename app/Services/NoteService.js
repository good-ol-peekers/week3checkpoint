import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { Pop } from "../Utils/Pop.js"
import { saveState } from "../Utils/Store.js"

class NoteService{

createNewNote(FormData){
    console.log("creating note in service")
    let newNote = new Note(FormData)
    appState.Notes.push(newNote)
    console.log(appState.Notes)
   
    appState.emit('Notes')
    saveState('notes', appState.Notes)
}

updateActiveNote(updatedNote){
    try {
        appState.activeNote.body = updatedNote
        // TODO need to 'update' the note appropriately....take a look at your Date methods
        console.log(update, "ACTIVE NOTE" )
        saveState('notes', appState.Notes)
        appState.emit('activeNote')
        // appState.createdNote.push(createdNote)
        console.log(updatedNote)
    } catch (error) {
        console.log(error)
    }
    
}

setNote(noteId){
    let setNote = appState.Notes.find(n => n.id == noteId)
    appState.activeNote = setNote
    console.log(noteId)
}


deleteNote(noteId){
        let noteIndex = appState.Notes.findIndex(n => n.id == noteId)
        
        if (noteIndex == -1){
            throw new Error('Bad Note')
        }
        appState.Notes.splice(noteIndex, 1)
        saveState('Notes', appState.Notes)
        appState.emit('Notes')
    }
}

export const noteService = new NoteService()