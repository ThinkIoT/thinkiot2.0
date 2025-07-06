import React, { useRef, useState, useEffect } from "react";

const images = [
  "/img/S3.1.jpg",
  "/img/S3.2.jpg",
  "/img/S3.3.jpg",
  "/img/S3.4.jpg",
  "/img/S3.5.jpg",
];

const Event0: React.FC = () => {
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
      activeIndex < images.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom right, #0d1b2a, #1b263b)",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Left Side: Image Slider */}
      <div
        style={{
          width: "50%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "30px" }}>Event Highlights</h2>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            fontSize: "22px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            fontSize: "22px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          ›
        </button>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflow: "hidden",
            scrollBehavior: "smooth",
            gap: "20px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                minWidth: "100%",
                height: "350px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 12px rgba(0,0,0,0.5)",
                flexShrink: 0,
              }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Bullet Details */}
      <div
        style={{
          width: "50%",
          padding: "60px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "justify",
        }}
      >
        <h1
          style={{
            fontSize: "2.4rem",
            marginBottom: "30px",
            textAlign: "left",
          }}
        >
          A Hands-On Approach to IoT: Bridging Theory with Practical Experience
        </h1>
        <ul
          style={{
            fontSize: "1.4rem",
            lineHeight: "2.2",
            paddingLeft: "25px",
          }}
        >
          <li>
            Organized by <i>ThinkIoT Lab</i> to introduce students to IoT.
          </li>
          <li>
            Strong theoretical foundation covering sensors, devices, and connectivity.
          </li>
          <li>
            Practical demonstrations to understand real IoT systems.
          </li>
          <li>
            Direct hands-on exposure to devices and protocols.
          </li>
          <li>
            Designed for both beginners and IoT enthusiasts.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Event0;
