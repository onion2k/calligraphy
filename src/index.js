import "./calligraphy.css";
import Rune from "rune.js";

const alphabet = {
  D: {}
};

class Calligraphy {
  constructor() {
    this.paper = new Rune({
      container: "#paper",
      debug: false
    });

    this.size = 400;
    this.pressure = 0.05;
  }
  letter(x, y, char) {
    switch (char) {
      case "D":
        this.test();
        break;
      default:
        break;
    }
  }
  continuous() {
    this.paper
      .path(400, 600)
      .moveTo(0, 0)
      .curveTo(-50, 0, -50, -20)
      .curveTo(-50, -40, 0, -40)
      .curveTo(50, -40, 200, -20)
      .curveTo(350, 0, 400, 0)
      .curveTo(450, 0, 450, -20)
      .curveTo(450, -40, 400, -40)
      .fill(0, 0, 0, 0.00000001)
      .strokeJoin("round")
      .stroke(0);

    this.paper.draw();
  }

  test() {
    let width = this.size;
    let pressure = this.pressure;

    let stroke = {
      posX: 100,
      posY: 100,
      x1: 0, //from
      y1: 0,
      x2: 0, //to - relative to start
      y2: width,
      angle: 30,
      curve: {
        inner: {
          x1: width * 0.75,
          y1: 0,
          x2: width * 0.75,
          y2: width
        },
        outer: {
          x1: width * 0.75 + width * pressure,
          y1: width,
          x2: width * 0.75 + width * pressure,
          y2: 0
        }
      }
    };

    this.outercurve(stroke);

    this.paper
      .path(stroke.posX, stroke.posY) //move to point
      .moveTo(stroke.x1, stroke.y1)
      .curveTo(-20, 0, -20, -10)
      .curveTo(-20, -20, 0, -20)
      .curveTo(20, -20, 20, 0)
      .fill(0, 0, 0, 0.00000001)
      .strokeJoin("round")
      .stroke(0);

    this.outercurve({
      posX: 100,
      posY: 100,
      x1: 20, //from
      y1: 0,
      x2: 20, //to - relative to start
      y2: 400,
      angle: 30,
      curve: {
        inner: {
          x1: 50 * 0.75,
          y1: 0,
          x2: 50 * 0.75,
          y2: 50
        },
        outer: {
          x1: 50 * 0.75 + 50 * pressure,
          y1: 50,
          x2: 50 * 0.75 + 50 * pressure,
          y2: 0
        }
      }
    });

    this.paper
      .path(stroke.posX, stroke.posY) //move to point
      .moveTo(stroke.x2, stroke.y2)
      .curveTo(-50, 400, -50, 380)
      .curveTo(-50, 360, 0, 360)
      .curveTo(50, 360, 200, 400)
      .fill(0, 0, 0, 0.00000001)
      .strokeJoin("round")
      .stroke(0);
  }

  render() {
    this.paper.draw();
  }

  outercurve(stroke) {
    this.paper
      .path(stroke.posX, stroke.posY) //move to point
      .moveTo(stroke.x1, stroke.y1)
      .curveTo(
        stroke.curve.inner.x1,
        stroke.curve.inner.y1,
        stroke.curve.inner.x2,
        stroke.curve.inner.y2,
        stroke.x2,
        stroke.y2
      )
      .curveTo(
        stroke.curve.outer.x1,
        stroke.curve.outer.y1,
        stroke.curve.outer.x2,
        stroke.curve.outer.y2,
        stroke.x1,
        stroke.y1
      )
      .fill(0);
  }
}

const cal = new Calligraphy();

cal.letter(100, 100, "D");
cal.render();
