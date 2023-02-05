import { NoteController } from "./Controllers/NoteController.js";

class App {
  noteController = new NoteController();
}

window["app"] = new App();
