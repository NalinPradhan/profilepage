import React, { useEffect, useRef } from 'react';

const FloatingText = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  // Function to initialize random positions and velocities
  const initializeText = () => {
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    textRefs.current.forEach((text) => {
      const velocityX = Math.random() * 2 ; // Random X velocity
      const velocityY = Math.random() * 2 ; // Random Y velocity

      text.dataset.velocityX = velocityX;
      text.dataset.velocityY = velocityY;

      const startX = Math.random() * (containerWidth - text.offsetWidth);
      const startY = Math.random() * (containerHeight - text.offsetHeight);

      text.style.left = `${startX}px`;
      text.style.top = `${startY}px`;
    });
  };

  // Function to update the positions of the texts
  const updatePositions = () => {
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    textRefs.current.forEach((text) => {
      let currentX = parseFloat(text.style.left);
      let currentY = parseFloat(text.style.top);

      let velocityX = parseFloat(text.dataset.velocityX);
      let velocityY = parseFloat(text.dataset.velocityY);

      // Update positions
      currentX += velocityX;
      currentY += velocityY;

      // Bounce back if hitting the boundary (left, right, top, bottom)
      if (currentX <= 0 || currentX + text.offsetWidth >= containerWidth) {
        velocityX *= -1; // Reverse X direction
      }

      if (currentY <= 0 || currentY + text.offsetHeight >= containerHeight) {
        velocityY *= -1; // Reverse Y direction
      }

      // Set the new velocities and positions
      text.dataset.velocityX = velocityX;
      text.dataset.velocityY = velocityY;

      text.style.left = `${currentX}px`;
      text.style.top = `${currentY}px`;
    });
  };

  useEffect(() => {
    // Initialize text positions and velocities on mount
    initializeText();

    // Continuously update the positions (like a game loop)
    const interval = setInterval(() => {
      updatePositions();
    }, 20); // Update every 20ms

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="border rounded-lg ml-16 border-zinc-700 py-1 flex m-3  sm:w-96 sm:h-80 items-center p-4 text-slate-300 justify-center floating-container floating-container" ref={containerRef} style={containerStyle}>
      <p className="floating-text" ref={(el) => (textRefs.current[0] = el)}>React</p>
      <p className="floating-text" ref={(el) => (textRefs.current[1] = el)}>Node</p>
      <p className="floating-text" ref={(el) => (textRefs.current[2] = el)}>MongoDB</p>
      <p className="floating-text" ref={(el) => (textRefs.current[3] = el)}>GSAP</p>
      <p className="floating-text" ref={(el) => (textRefs.current[4] = el)}>Tailwind</p>
      <p className="floating-text" ref={(el) => (textRefs.current[5] = el)}>Vercel</p>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  position: 'relative',
//   width: '200px', // Adjust as needed
  height: '200px', // Adjust as needed
  border: '2px solid #333', // To visualize the container boundary
  overflow: 'hidden', // Ensures the text doesn't go out of bounds
};

// Inline CSS for floating text
// const textStyle = {
//   position: 'absolute',
//   fontSize: '18px', // Adjust the size as needed
//   whiteSpace: 'nowrap', // Prevents the text from wrapping
// };

export default FloatingText;
