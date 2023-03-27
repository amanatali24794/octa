import React, { useState, useEffect } from "react";
import loadingGif from '../images/loading.gif';


const LoadingIndicator = ({children}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const loadingStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    opacity: loaded ? 0 : 1,
    transition: "opacity 0.5s ease-in-out",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  };

  const handleTransitionEnd = (event) => {
    if (event.propertyName === "opacity") {
      event.target.remove();
    }
  };

  return (
    <>
        <div style={loadingStyle} onTransitionEnd={handleTransitionEnd}>
             <img src={loadingGif} alt="loading" />
        </div>
        {children}
    </>
  );
};

export default LoadingIndicator;