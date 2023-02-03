import { NoteController } from "./Controllers/NoteController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  noteController = new NoteController();
}

window["app"] = new App();
