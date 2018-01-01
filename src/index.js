import "./calligraphy.css";
import Rune from "rune.js";

class Calligraphy {
  constructor() {
    this.paper = new Rune({
      container: "#paper",
      width: 800,
      height: 600,
      debug: false
    });
    this.paper.grid({
      x: 0,
      y: 0,
      width: 800,
      height: 600,
      columns: 40,
      rows: 30
    });
    this.test();
  }
  test() {
    const start = { x: 200, y: 100 };

    //calculate n1 and n2 curve points

    const n1 = { x1: 330, y1: 0, x2: 330, y2: 400 };
    const n2 = { x1: 350, y1: 400, x2: 350, y2: 0 };

    this.paper
      .path(start.x, start.y) //move to point
      .curveTo(n1.x1, n1.y1, n1.x2, n1.y2, 0, 400) //ctrlx1,ctrly1, ctrlx2,ctrly2, x,y
      .curveTo(n2.x1, n2.y1, n2.x2, n2.y2, 0, 0) //ctrlx1,ctrly1, ctrlx2,ctrly2, x,y
      .lineTo(0, 400)
      .fill(0)
      .closePath(); //end

    this.paper.draw();
  }
}

const cal = new Calligraphy();
