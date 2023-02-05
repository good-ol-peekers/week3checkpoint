import { generateId } from "../Utils/generateId.js"




export class Note {

constructor(data){
  this.id = generateId()
this.title = data.title
this.body = data.body || ''
this.color = data.color
this.createdTime = data.createdTime || new Date().toLocaleTimeString('en-US')
this.currentTime = data.currentTime
this.totalJots = data.totalJots
this.wordCount = data.wordCount
this.characterCount = data.characterCount
}

get freshNote() {
    return `
    ${this.title}
    `
}

get activeNote(){
  return `
 <h2>${this.title}</h2>
          <h4>Created at Time Stamp</h4>
          <h4>Updated at Time Stamp</h4>
          <h4>Word Count & Character Count</h4>

          <div class="bg-secondary text-white">
            <textarea name="body" id="journal" cols="30" rows="10" onblur="app.noteController.createActiveNote()"> tom write code, tom get bananas
                tom like bananas
              </textarea>
          </div>
          <div>
            <button class="btn btn-outline-danger">delete</button>
          </div>
  `
}
}