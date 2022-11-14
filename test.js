class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  show() {
    return `Day la khoa hoc ${this.name} co gia la ${this.price} $`;
  }
}
let jsCourse = new Course("JS", 1000);
console.log(jsCourse);
