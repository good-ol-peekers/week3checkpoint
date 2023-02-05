import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js"

class NoteService{

createNewNote(FormData){
    console.log("creating note in service")
    let newNote = new Note(FormData)
    appState.newNote.push(newNote)
    console.log(appState.newNote)
    appState.emit('newNote')
}

createActiveNote(updatedNote){
    try {
        let createdNote = appState.createdNote
        createdNote.updatedNote = updatedNote
        appState.createdNote.push(createdNo)
        saveState('journal',appState.createdNote)
        appState.emit('activeNote')
        // appState.createdNote.push(createdNote)
        console.log(createdNote)
    } catch (error) {
        throw new error(error)
    }
    
}
setNote(noteId){
    let setNote = appState.newNote.find(n. => n.id == noteId)
    appState.createdNote = setNote
}
}

export const noteService = new NoteService()