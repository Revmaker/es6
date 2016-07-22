class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.name = 'Polygon';
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }

  static areaDiff(a, b) {
    const areaA = a.area;
    const areaB = b.area;

    return areaA - areaB;
  }
}
//
// const squareOne = new Polygon(10, 10);
//
// console.log(squareOne.area);

// Static methods may be called without instantiating the class

// const squareTwo = new Polygon(5, 4);
//
// console.log(Polygon.areaDiff(squareOne, squareTwo));

// extends allows you to create a child class, which inherits all of the parents properties

// class updatedPolygon extends Polygon {
//   get perimeter() {
//     return this.calcPerimeter();
//   }
//   calcPerimeter() {
//     return (2 * this.height) + (2 * this.width);
//   }
// }
//
// const rectangle = new updatedPolygon(5, 10);
//
// console.log(rectangle.area)
// console.log(rectangle.perimeter)

// can use super to call parent methods and/or set properties in the new class

// class Square extends Polygon {
//     constructor(length) {
//       super(length, length);
//       this.name = 'Square';
//     }
//     saysName() {
//       console.log(this.name)
//     }
//     saysArea() {
//       console.log(`My area is ${super.area}`);
//     }
// }
//
// const square = new Square(50);
//
// square.saysName();
// square.saysArea();
