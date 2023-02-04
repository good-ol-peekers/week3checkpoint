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
              <h2 id="">${this.title}</h2>
            <h4>${this.createdTime}</h4>
            <h4>${this.currentTime}</h4>
            <h4>${this.characterCount}</h4>
            <h4>${this.wordCount}</h4>
            <div class="bg-secondary text-white">
              <textarea name="body" id="" cols="30" rows="10"> tom write code, tom get banana.</textarea>
            </div>
            <div>
              <button class="btn btn-danger">delete</button>
            </div>
  `
}
}