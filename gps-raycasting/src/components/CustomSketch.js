import React, { useState } from "react";
import Sketch from "react-p5";
import PropTypes from "prop-types";

const CustomSketch = ({ line, ray }) => {

  // boundary
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);

  // ray
  const [pos, setPos] = useState(null);
  const [dir, setDir] = useState(null);

  const castRayOnWall = (p5) => {
    const x1 = a.x;
    const y1 = a.y;
    const x2 = b.x;
    const y2 = b.y;
  
    const x3 = pos.x;
    const y3 = pos.y;
    const x4 = pos.x + dir.x;
    const y4 = pos.y + dir.y;
  
    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den === 0) {
      return;
    }
  
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
  
    if (t > 0 && t < 1 && u > 0) {
      let pt = p5.createVector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    }
  
    return;
  }

  const lootAtPoint = (x, y) => {
    dir.x = x - pos.x;
    dir.y = y - pos.y;
    dir.normalize();
  }

  const setup = (p5, canvasParentRef) => {
    // boundary
    setA(p5.createVector(line.x1, line.y1));
    setB(p5.createVector(line.x2, line.y2));

    // ray
    setPos(p5.createVector(ray.x, ray.y));
    setDir(p5.createVector(1, 0));

    // sketch
    p5.createCanvas(600, 600).parent(canvasParentRef);
  };

  const draw = (p5) => {
    // sketch
    p5.background(0);

    // boundary
    p5.stroke(255);
    p5.line(a.x, a.y, b.x, b.y);

    // ray
    p5.stroke(255);
    p5.push();
    p5.translate(pos.x, pos.y);
    p5.line(0, 0, dir.x * 10, dir.y * 10);
    p5.pop();
    lootAtPoint(p5.mouseX, p5.mouseY);

    let point = castRayOnWall(p5);
    if (point) {
      p5.fill(255);
      p5.ellipse(point.x, point.y, 8, 8);
    }
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
};

export default CustomSketch;

CustomSketch.propTypes = {
  line: PropTypes.shape({
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number
  }),
  ray: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  })
};
