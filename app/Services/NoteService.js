import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { EventEmitter } from "../Utils/EventEmitter.js"

class NoteService{

createNewNote(FormData){
    console.log("creating note in service")
    let newNote = new Note(FormData)
    appState.newNote.push(newNote)
    console.log(appState.newNote)
    appState.emit('newNote')
}

}

export const noteService = new NoteService()