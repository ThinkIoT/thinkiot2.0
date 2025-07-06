import React, { useRef, useState, useEffect } from "react";

const images = [
  "/img/S2.1.jpg",
  "/img/S2.2.jpg",
  "/img/S2.3.jpg",
  "/img/S2.4.jpg",
  "/img/S2.5.jpg",
];

const ZeroEvent: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / images.length;
      scrollRef.current.scrollTo({
        left: index * scrollWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : 0;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      activeIndex < images.length - 1 ? activeIndex + 1 : images.length - 1;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    // Automatically scroll every 3 seconds
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % images.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
        background: "linear-gradient(to bottom right, #0d1b2a, #1b263b)",
        color: "white",
      }}
    >
      {/* Background Carousel */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          height: "100%",
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              minWidth: "100%",
              height: "100%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.2,
              }}
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          fontSize: "24px",
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
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ›
      </button>

      {/* Centered Event Details */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "900px",
          padding: "40px",
          background: "rgba(0,0,0,0.6)",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <h1
          style={{ fontSize: "2.4rem", marginBottom: "25px", fontWeight: "bold" }}
        >
          Hands-On IoT Learning with Strong Fundamentals
        </h1>
        <ul
          style={{
            fontSize: "1.2rem",
            lineHeight: "2",
            listStyle: "disc",
            textAlign: "left",
            paddingLeft: "30px",
          }}
        >
          <li>
            Organized by <i>ThinkIoT Lab</i> for comprehensive IoT learning.
          </li>
          <li>
            Covers core concepts, system architecture, and real-world IoT applications.
          </li>
          <li>
            Includes hands-on experience with IoT devices and communication protocols.
          </li>
          <li>
            Focused on bridging theory with practical implementation.
          </li>
          <li>
            Ideal for students aiming to build IoT projects or enter industrial domains.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ZeroEvent;
