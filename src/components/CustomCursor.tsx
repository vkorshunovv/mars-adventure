import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  const movementThreshold = 10;

  useEffect(() => {
    const updateCursor = (event: MouseEvent) => {
      const newX = event.clientX;
      const newY = event.clientY;

      const deltaX = newX - position.x;
      const deltaY = newY - position.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance > movementThreshold) {
        const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        setPosition({ x: newX, y: newY });
        setAngle(newAngle);
      }
    };

    window.addEventListener("mousemove", updateCursor);

    return () => window.removeEventListener("mousemove", updateCursor);
  }, [position]);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        pointerEvents: "none",
        transition: "transform .6s ease-out",
        zIndex: 9999,
      }}
    >
      <img
        src="/rocket-cursor.png"
        alt="Spaceship cursor"
        width={32}
        height={32}
        style={{ display: "block" }}
      />
    </div>
  );
}
