



export class Note {

constructor(data){
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

}