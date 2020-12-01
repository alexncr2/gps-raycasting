import React from 'react';
import CustomSketch from './CustomSketch';

function RayCasting(props) {
  const line = {
    x1: 300,
    y1: 100,
    x2: 300,
    y2: 500
  };

  const ray = {
    x: 100,
    y: 200
  };

  return (
    <div>
      <CustomSketch line={line} ray={ray} />
    </div>
  );
}

export default RayCasting;
