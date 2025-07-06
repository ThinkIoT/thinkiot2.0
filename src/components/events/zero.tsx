import React, { useRef, useState, useEffect } from "react";

const images = [
  "/img/S0.0.jpg",
  "/img/S0.1.jpg",
  "/img/S0.2.jpg",
  "/img/S0.3.jpg",
  "/img/S0.4.jpg",
  "/img/S0.5.jpg",
  "/img/S0.6.jpg",
  "/img/S0.7.jpg",
  "/img/S0.8.jpg",
  "/img/S0.9.jpg",
  "/img/S0.10.jpg",
  "/img/S0.11.jpg",
  "/img/S0.12.jpg",
  "/img/S0.13.jpg",
  "/img/S0.14.jpg",
];

const SeminarPageZero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom right, #0d1b2a, #1b263b)",
        color: "white",
        padding: "40px 20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "2.7rem",
          fontWeight: "bold",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Hands-On IoT Learning with Strong Fundamentals
      </h1>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Top Bullet */}
        <div
          style={{
            animation: "fadeSlideDown 1s ease-in-out",
            fontSize: "1.3rem",
            lineHeight: "2",
            width: "90%",
            textAlign: "center",
          }}
        >
          <ul style={{ listStyle: "disc", paddingLeft: "30px" }}>
            <li>
              We’re proud to announce the successful completion of
              <i> ENIGMA, a hands-on IoT event held on 16th May 2025 at Albert Einstein Hall.</i>{" "}
              Explore IoT Through Hands-On Learning and Expert Talks, held on 16th May 2025 at
              Albert Einstein Hall. Organized by Think IoT with the CSE Department, the event
              brought together students, innovators, and educators for a day-long immersive journey
              into the Internet of Things.
            </li>
          </ul>
        </div>

        {/* Middle Layout */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Left Bullet */}
          <div
            style={{
              width: "23%",
              animation: "fadeSlideLeft 1.2s ease-in-out",
              fontSize: "1.3rem",
              lineHeight: "2",
            }}
          >
            <ul style={{ listStyle: "disc", paddingLeft: "30px" }}>
              <li>
                The first half featured insightful sessions, starting with a talk by Chief Guest
                Asst. Prof. Sujay Saha (NIT Durgapur) on embedded systems and IoT trends. This was
                followed by a technical session from the IoT Lab team, led by Mr. Subhadeep
                Mukherjee, bridging core engineering and real-world IoT. Third-year students Survi
                Mukherjee and Rima Gorai also showcased smart system projects addressing real-life
                challenges.
              </li>
            </ul>
          </div>

          {/* Image Carousel */}
          <div
            style={{
              position: "relative",
              width: "48%",
              height: "65vh",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            <div
              ref={scrollRef}
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                scrollBehavior: "smooth",
              }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    height: "100%",
                    flexShrink: 0,
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "20px",
                      boxShadow: "0 0 10px rgba(0,0,0,0.4)",
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
                left: "10px",
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
                right: "10px",
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
          </div>

          {/* Right Bullet */}
          <div
            style={{
              width: "23%",
              animation: "fadeSlideRight 1.2s ease-in-out",
              fontSize: "1.3rem",
              lineHeight: "2",
            }}
          >
            <ul style={{ listStyle: "disc", paddingLeft: "30px" }}>
              <li>
                The second half featured a hands-on workshop on the ESP32 board, where participants
                set up the Arduino IDE, wrote basic logic, and interacted with hardware. It
                concluded with a Morse Code project demonstrating real-time data transmission using
                LEDs and microcontroller logic.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bullet */}
        <div
          style={{
            animation: "fadeSlideUp 1s ease-in-out",
            fontSize: "1.3rem",
            lineHeight: "2",
            width: "90%",
            textAlign: "center",
          }}
        >
          <ul style={{ listStyle: "disc", paddingLeft: "30px" }}>
            <li>
              Through this event, participants not only gained practical exposure to IoT
              technologies but also developed a deeper understanding of how intelligent systems are
              built and deployed. ENIGMA successfully bridged the gap between academic learning and
              technological application, inspiring students to innovate and explore the rapidly
              growing domain of IoT.
            </li>
          </ul>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeSlideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeSlideLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeSlideRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default SeminarPageZero;
