import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 600,
      backSpeed:60,
      strings: ["Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="center">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Yeshaswini Bheemreddy</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
