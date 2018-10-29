



export class ItemModel {
  name: string;
  note: string;

  saluda() {

    console.log("Hola soy " + this.name)
  }


  constructor(name: string, note: string) {
    this.name = name;
    this.note = note
  }

  greet() {
    return "Hello, " + this.name;


  }
}
