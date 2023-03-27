import React, { useState } from "react";
const CircleCursor = ({ children, normalRadius, bigRadius }) => {
  const [isOverClickable, setIsOverClickable] = useState(false);
  const styles = {
    content: {
      position: "relative",
      zIndex: 1,
    },
    circle: {
      position: "absolute",
      width: normalRadius + "px",
      height: normalRadius + "px",
      borderRadius: "50%",
      pointerEvents: "none",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
      transition: "all .35s ease-out",
      backgroundColor: "rgba(122, 122, 122, 0.3)",
    },
    clickable: {
      cursor: "pointer",
      position: "relative",
      zIndex: 2,
    },
    bigCircle: {
      width: bigRadius + "px",
      height: bigRadius + "px",
      borderWidth: "3px",
    },
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    //console.log(event);
    const element = event.target //document.elementFromPoint(event.clientX, event.clientY);
    const isOverButton = element.tagName.toLowerCase() === "button";
    const isOverAnchor = element.tagName.toLowerCase() === "a";
    const isOverSvg = element.tagName.toLowerCase() === "svg";
    setIsOverClickable(isOverButton || isOverAnchor || isOverSvg);
    setPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <>
      <div style={styles.content} onMouseMove={handleMouseMove}>
        {children}
      </div>
      <div
        style={{
          ...styles.circle,
          ...isOverClickable && styles.bigCircle,
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CircleCursor;
