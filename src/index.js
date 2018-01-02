import "./calligraphy.css";
import Rune from "rune.js";

class Calligraphy {
  constructor() {
    this.paper = new Rune({
      container: "#paper",
      width: 800,
      height: 600,
      debug: true
    });
    this.test();
  }
  test() {
    const stroke = {
      type: "outercurve",
      posX: 100,
      posY: 100,
      x1: 0, //from
      y1: 0,
      x2: 0, //to - relative to start
      y2: 400,
      angle: 30
    };

    stroke.curve = { x1: 330, y1: stroke.y1, x2: 330, y2: stroke.y2 };

    /*
        distance between edges = pressure

        how to vary pressure through the stroke? control points?

        multiply distance by angle (100% at perpendicular)
        
        convert to control point data for stroke type
    */

    const n1 = { x1: 330, y1: 0, x2: 330, y2: 400 };
    const n2 = { x1: 350, y1: 400, x2: 350, y2: 0 };

    this.paper
      .path(stroke.posX, stroke.posY) //move to point
      .moveTo(stroke.x1, stroke.y1)
      .curveTo(n1.x1, n1.y1, n1.x2, n1.y2, stroke.x2, stroke.y2) //ctrlx1,ctrly1, ctrlx2,ctrly2, x,y
      .curveTo(n2.x1, n2.y1, n2.x2, n2.y2, stroke.x1, stroke.y1) //ctrlx1,ctrly1, ctrlx2,ctrly2, x,y
      .lineTo(stroke.x2, stroke.y2)
      .fill(0)
      .closePath(); //end

    this.paper.draw();
  }
}

const cal = new Calligraphy();
