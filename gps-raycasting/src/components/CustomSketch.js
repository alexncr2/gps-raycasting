import React, { useState } from "react";
import Sketch from "react-p5";
import PropTypes from "prop-types";
import { Vector } from "p5";

const CustomSketch = ({ lines }) => {

  // boundary (wall)
  const [walls, setWalls] = useState([]);
  const [xoff, setXoff] = useState(0);
  const [yoff, setYoff] = useState(1000);

  const addWall = (aVector, bVector) => {
    setWalls(walls => [...walls, { a: aVector, b: bVector }]);
  };

  // particle
  const [particle, setParticle] = useState(null);

  const castRayOnWalls = (p5, ray, wall) => {
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    const x2 = wall.b.x;
    const y2 = wall.b.y;

    const dir = Vector.fromAngle(ray.angle);

    const x3 = particle.pos.x;
    const y3 = particle.pos.y;
    const x4 = particle.pos.x + dir.x;
    const y4 = particle.pos.y + dir.y;

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

  const lookAtWalls = (p5) => {
    for (let ray of particle.rays) {
      let record = Infinity;
      let closestPoint = null;
      for (let wall of walls) {
        const pt = castRayOnWalls(p5, ray, wall);
        if (pt) {
          const distance = Vector.dist(particle.pos, pt);
          // distance = min(distance, record);
          if (distance < record) {
            record = distance;
            closestPoint = pt;
          }
        }
      }
      if (closestPoint) {
        p5.stroke(255, 69);
        p5.line(particle.pos.x, particle.pos.y, closestPoint.x, closestPoint.y);
      }
    }
  }

  const createRays = (p5, pos) => {
    let rays = [];
    // change angle increment for more rays
    for (let angle = 0; angle < 360; angle += 1) {
      rays.push({
        pos: pos,
        angle: p5.radians(angle)
      });
    }
    return rays;
  }

  const updateParticlePosition = (x, y) => {
    particle.pos.set(x, y);
  }

  const setup = (p5, canvasParentRef) => {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    for (let line of lines) {
      const a = p5.createVector(line.x1, line.y1);
      const b = p5.createVector(line.x2, line.y2);
      addWall(a, b);
    }

    // particle
    const particlePosition = p5.createVector(canvasWidth / 2, canvasHeight / 2);

    setParticle({
      pos: particlePosition,
      rays: (createRays(p5, particlePosition))
    });

    // sketch
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };

  const draw = (p5) => {
    // sketch
    p5.background(0);

    // boundary
    for (let wall of walls) {
      p5.stroke(255);
      p5.line(wall.a.x, wall.a.y, wall.b.x, wall.b.y);
    }

    // particle - show
    p5.fill(255);
    p5.ellipse(particle.pos.x, particle.pos.y, 4);
    for (let ray of particle.rays) {
      // ray - show
      p5.stroke(255);
      p5.push();
      p5.translate(ray.pos.x, ray.pos.y);
      const dir = Vector.fromAngle(ray.angle);
      p5.line(0, 0, dir.x * 10, dir.y * 10);
      p5.pop();
    }

    // particle move with mouse or perlin noise
    updateParticlePosition(p5.mouseX, p5.mouseY);
    //updateParticlePosition(p5.noise(xoff) * window.innerWidth, p5.noise(yoff) * window.innerHeight);

    setXoff(xoff + 0.01);
    setYoff(yoff + 0.01);

    // particle look at wall
    lookAtWalls(p5);
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
};

export default CustomSketch;

CustomSketch.propTypes = {
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number
    })
  )
};
