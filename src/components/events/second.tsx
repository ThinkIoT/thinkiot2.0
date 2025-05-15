import React, { useRef, useState } from "react";

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

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom right, #0d1b2a, #1b263b)",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
        paddingInline: "20px",
        paddingTop: "60px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Hands-On IoT Learning with Strong Fundamentals
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          This foundational session, organized by <i>ThinkIoT Lab</i>, is designed to give students a complete understanding of the Internet of Things (IoT) by first establishing a solid background in the subject. From the fundamental principles to the architecture and real-world relevance of IoT systems, participants will be guided step-by-step through the concepts that define this technology. Once the theoretical base is established, the seminar transitions into a hands-on approach, allowing students to experience IoT devices, sensors, and communication protocols directly. This blend of deep knowledge and practical exposure equips learners with the skills and confidence needed to develop innovative IoT projects and pursue advanced IoT applications in academic and industrial domains.
        </p>
      </div>

      {/* Event Highlight Heading */}
      <h2 style={{ fontSize: "1.8rem", color: "#fff", margin: "40px 0 20px" }}>
        Event Highlights
      </h2>

      {/* Image Slider Section */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 10px" }}>
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflow: "hidden",
            scrollBehavior: "smooth",
            gap: "20px",
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                minWidth: "100%",
                maxHeight: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                flexShrink: 0,
              }}
            >
              <img
                src={src}
                alt={`IoT slide ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px" }}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: activeIndex === index ? "white" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZeroEvent;
