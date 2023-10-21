import React, { useState } from "react";

const ExpandableLine = () => {
  const [lineLength, setLineLength] = useState(100);

  const increaseLineLength = () => {
    setLineLength(lineLength + 20);
  };
  return (
    <div>
      <svg width="200" height="50">
        <line
          x1="10"
          y1="25"
          x2={10 + lineLength}
          y2="25"
          stroke="black"
          strokeWidth="2"
        />
        <button onClick={(increaseLineLength, console.log("test"))}>
          Expand Line
        </button>
      </svg>
    </div>
  );
};

export default ExpandableLine;
