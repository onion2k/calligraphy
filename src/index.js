import "./calligraphy.css";
import Rune from "rune.js";

class Calligraphy {
  constructor() {
    this.paper = new Rune({
      container: "#paper",
      debug: false
    });
    this.test();
  }
  test() {
    let width = 400;
    let pressure = 0.05;

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

    width = 400;
    pressure = 0.05;

    stroke = {
      posX: 500,
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
      .moveTo(stroke.x2, stroke.y2)
      .curveTo(-50, 400, -50, 380, -50, 380)
      .curveTo(-50, 380, -50, 360, 0, 360)
      .curveTo(0, 360, 50, 360, 200, 400)
      .fill(0, 0, 0, 0.00000001)
      .stroke(0);

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
      ) //ctrlx1,ctrly1, ctrlx2,ctrly2, x,y
      .curveTo(
        stroke.curve.outer.x1,
        stroke.curve.outer.y1,
        stroke.curve.outer.x2,
        stroke.curve.outer.y2,
        stroke.x1,
        stroke.y1
      ) //ctrlx1,ctrly1, ctrlx2,ctrly2, x,y
      .fill(0);
  }
}

const cal = new Calligraphy();
