import React, { useRef, useState } from "react";

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
          A Hands-On Approach to IoT: Bridging Theory with Practical Experience
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          This event, organized by <i>ThinkIoT Lab</i>, aims to provide a comprehensive hands-on approach to learning the Internet of Things (IoT). The seminar begins by laying a strong theoretical foundation in IoT concepts, including an understanding of key technologies such as sensors, devices, connectivity, and data analytics. Once the theoretical framework is built, the event transitions to practical demonstrations, enabling students to interact directly with IoT devices, understand their components, and explore how these technologies work in real-world applications. Whether you're a student just starting to learn about IoT or an enthusiast eager to dive deeper, this seminar offers a unique opportunity to experience the world of IoT firsthand and learn from experts in the field.
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
                minWidth: "10%",
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

export default Event0;
