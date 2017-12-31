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
    this.paper
      .path(250, 140) //move to point
      .curveTo(0, 0, 50, -100, 100, 0) //x,y, ctrlx1,ctrly1, ctrlx2,ctrly2
      .curveTo(100, 0, 150, 100, 200, 0) //x,y, ctrlx1,ctrly1, ctrlx2,ctrly2
      .curveTo(200, 0, 250, -100, 300, 0) //x,y, ctrlx1,ctrly1, ctrlx2,ctrly2
      .lineTo(300, 200) //x,y
      .lineTo(0, 200) //x,y
      .closePath(); //end

    this.paper.draw();
  }
}

const cal = new Calligraphy();
