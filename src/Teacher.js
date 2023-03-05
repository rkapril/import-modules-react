import { CoolPerson } from "./Cool Person";

export class Teacher extends CoolPerson {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
