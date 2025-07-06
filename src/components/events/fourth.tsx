import React, { useEffect, useRef, useState } from "react";

const images = [
  "/img/S4.1.jpg",
  "/img/S4.2.jpg",
  "/img/S4.3.jpg",
  "/img/S4.4.jpg",
  "/img/S4.5.jpg",
];

const Event1: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (index >= 0 && index < images.length) {
      setActiveIndex(index);
    }
  };

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex((activeIndex + 1) % images.length);

  // 🔄 Auto-scroll effect every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        color: "white",
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0d1b2a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Image (Watermarked) */}
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex + 1}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.2,
          zIndex: 0,
          transition: "opacity 1s ease-in-out",
        }}
      />

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.4)",
          border: "none",
          borderRadius: "50%",
          color: "white",
          fontSize: "28px",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.4)",
          border: "none",
          borderRadius: "50%",
          color: "white",
          fontSize: "28px",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ›
      </button>

      {/* Description Box */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          padding: "40px",
          background: "rgba(13, 27, 42, 0.7)",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.6)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
          Seminar on the IoT Platform: Empowering the Future of Technology
        </h1>
        <ul
          style={{
            textAlign: "justify",
            fontSize: "1.3rem",
            lineHeight: "2.1",
            paddingInline: "20px",
            listStyleType: "disc",
          }}
        >
          <li>
            Organized by <i>ThinkIoT Lab</i> to introduce IoT platform and innovation.
          </li>
          <li>
            Covers fundamental IoT technologies: sensors, communication protocols, cloud.
          </li>
          <li>
            Hands-on session with real-world IoT devices and demonstrations.
          </li>
          <li>
            Held at <b>1st floor, PG & Research Building, BCREC, Durgapur</b>.
          </li>
          <li>
            Great opportunity for networking, interaction with IoT experts.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Event1;
