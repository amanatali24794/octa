import React from 'react';
import styles from "@/styles/LineBackground.module.css"

const Line = ({ slide }) => {
  return (
    <div className={styles["full-line"]} style={{
        animation: `${styles[slide]} 20s ease-out infinite`
    }}>
        <div className={styles["line-segment"]}></div>
        <div style={{ height: "100%" }}></div>
    </div>
  );
};

const LineContainer = ({ children }) => {
  return (
    <div className={styles["lines-container"]}>
      {children}
    </div>
  );
}

const LineBackground = ({children}) => {
  return (
    <div className={styles["bg-container"]} style={{overflow: "hidden"}}>
      {children}
      <LineContainer>
        <Line slide="slide-up"/>
        <Line slide="slide-down"/>
        <Line slide="slide-up"/>
        <Line slide="slide-down"/>
        <Line slide="slide-up"/>
        <Line slide="slide-down"/>
        
      </LineContainer>
    </div>
  )
}


export default LineBackground