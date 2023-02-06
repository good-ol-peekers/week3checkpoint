import { generateId } from "../Utils/generateId.js"




export class Note {

constructor(data){
  this.id = generateId()
this.title = data.title
this.body = data.body || ''
this.color = data.color
this.createdTime = data.createdTime || new Date().toLocaleTimeString('en-US')
// TODO need to add a property for updatedTime
this.updatedTime = data.updatedTime || new Date().toLocaleTimeString('en-US')
this.totalJots = data.totalJots
this.wordCount = data.wordCount
this.characterCount = data.characterCount
switch (this.color) {
  case 'green':
    this.color = 'green'
    break;

  default:
    break;
}
}

get freshNote() {
    return `<h3>${this.createdTime}</h3>
            <button class="btn btn-outline-success"  onclick="app.noteController.setNote('${this.id}')">${this.title}</button>
    
    `
}

// TODO add color style to these templates....think of how may I apply a style with javascript or in my HTML template

get activeNote(){
  return `
 <div class="col-10 m-auto rounded border">
          <h2>${this.title}</h2>
          <h4>${this.createdTime}</h4>
          <h4>${this.updatedTime}</h4>
          <h4>${this.wordCount} & ${this.characterCount}</h4>

          <div class="bg-secondary text-white">
            <textarea class="textArea" name="body" id="journal" cols="30" rows="10"
              onblur="app.noteController.updateActiveNote()">${this.body}
              </textarea>
          </div>
          <div>
            <button class="btn btn-outline-danger">delete</button>
          </div>
        </div>
  `

  // TODO need to add delete function to button

}
}