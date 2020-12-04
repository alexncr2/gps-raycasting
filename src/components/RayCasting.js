import React from 'react';
import CustomSketch from './CustomSketch';

function RayCasting(props) {

  const getRandomWidth = () => {
    return Math.floor(Math.random() * window.innerWidth) + 1;
  }

  const getRandomHeight = () => {
    return Math.floor(Math.random() * window.innerHeight) + 1;
  }

  const getRandomLines = (count) => {
    // initialized with border
    let lines = [
      {
        x1: 0,
        y1: 0,
        x2: window.innerWidth,
        y2: 0,
      }, // top 
      {
        x1: window.innerWidth,
        y1: 0,
        x2: window.innerWidth,
        y2: window.innerHeight,
      }, // right
      {
        x1: window.innerWidth,
        y1: window.innerHeight,
        x2: 0,
        y2: window.innerHeight,
      }, // bottom
      {
        x1: 0,
        y1: window.innerHeight,
        x2: 0,
        y2: 0,
      }, // left
    ];

    for (let i = 0; i < count; i++) {
      lines = [...lines, {
        x1: getRandomWidth(), y1: getRandomHeight(),
        x2: getRandomWidth(), y2: getRandomHeight()
      }];
    }

    return lines;
  }

  return (
    <div>
      <CustomSketch lines={getRandomLines(5)} />
    </div>
  );
}

export default RayCasting;
