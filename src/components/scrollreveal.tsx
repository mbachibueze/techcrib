import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// Define the types for the styles object
interface Styles {
  [key: string]: string; // The key is a string, and the value is the class name (string)
}

const useScrollReveal = (styles: Styles) => {
  useEffect(() => {
    // Apply ScrollReveal to each class name in the provided styles object
    for (const style in styles) {
      if (Object.hasOwnProperty.call(styles, style)) {
        const className = styles[style];
        ScrollReveal().reveal(`.${className}`, {
          distance: "50px",
          duration: 800,
          easing: "ease-in-out",
          opacity: 0,
          scale: 0.85,
          reset: true,
        });
      }
    }
  }, [styles]); // Rerun when styles change
};

export default useScrollReveal;
