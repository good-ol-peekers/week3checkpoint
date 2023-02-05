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
switch (this.color) {
  case 'green':
    this.color = 'green'
    break;

  default:
    break;
}
}

get freshNote() {
    return `
    ${this.title}
    `
}

get activeNote(){
  return `
 <div class="col-10 m-auto rounded border">
          <h2>${this.title}</h2>
          <h4>${this.createdTime}</h4>
          <h4>Updated at Time Stamp</h4>
          <h4>Word Count & Character Count</h4>
  `
}
}