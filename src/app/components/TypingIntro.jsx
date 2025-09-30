import { useEffect, useRef } from "react";

function typeWriter(element, text, i, fnCallback) {
  if (i < text.length) {
    element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
    setTimeout(() => typeWriter(element, text, i + 1, fnCallback), 100);
  } else if (typeof fnCallback === "function") {
    setTimeout(fnCallback, 700);
  }
}

function startTextAnimation(element, dataText, i) {
  if (typeof dataText[i] === "undefined") {
    setTimeout(() => startTextAnimation(element, dataText, 0), 2000);
  } else if (i < dataText.length) {
    typeWriter(element, dataText[i], 0, () => startTextAnimation(element, dataText, i + 1));
  }
}

export function AnimatedText() {
  const textRef = useRef(null);

  useEffect(() => {
    const texts = ["sophomore cs student.", "driven by ambition.", "avid mustang fan.", "i also like cats."];
    if (textRef.current) {
      startTextAnimation(textRef.current, texts, 0);
    }
  }, []);

  return <h1 ref={textRef} className = "animated-text text-primary"></h1>;
}