import { CoolPerson } from "./Cool Person";

export function promote() {
  console.log("promote")
}

export default class Teacher extends CoolPerson {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
