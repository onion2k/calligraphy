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
    this.test();
  }
  test() {
    const start = { x: 100, y: 100 };

    //calculate n1 and n2 curve points

    this.paper
      .path(start.x, start.y) //move to point
      .curveTo(50, 150, 80, 180, 200, 400) //ctrlx1,ctrly1, ctrlx2,ctrly2, x,y
      .curveTo(150, 250, 120, 220, 0, 0) //ctrlx1,ctrly1, ctrlx2,ctrly2, x,y
      .closePath(); //end

    this.paper.draw();
  }
}

const cal = new Calligraphy();
