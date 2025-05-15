import React, { useRef, useState } from 'react';

const images = [
  '/img/Seminar1.1.jpg',
  '/img/Seminar1.2.jpg',
  '/img/Seminar1.3.jpg',
  '/img/Seminar1.4.jpg',
  '/img/Seminar1.5.jpg',
  '/img/Seminar1.6.jpg',
];

const SeminarPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / images.length;
      scrollRef.current.scrollTo({
        left: index * scrollWidth,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] text-white flex flex-col items-center p-5 space-y-10">
      {/* Main Content Section */}
      <div className="max-w-4xl text-center mt-10 px-4">
        <h1 className="text-3xl font-bold mb-4">All India Seminar on Introduction to IoT Platform</h1>
        <p className="text-lg leading-relaxed">
          The <i>All India Seminar on Introduction to IoT Platform</i> is a premier national-level initiative aimed at expanding awareness and fostering innovation in the transformative domain of the Internet of Things (IoT). Organized by <i>The Institute of Engineers (India), Durgapur Local Centre</i>, under the guidance of the Computer Engineering Division of IEI, and in collaboration with <b>ThinkIoT Lab</b>, the event serves as a hub where academia meets industry. It unites professionals, researchers, and students from across the country to explore IoT applications through expert lectures, interactive sessions, and live demonstrations. A key highlight is the <i>Special Session for Idea and Paper Submission</i>, where innovative minds can present solutions to real-world problems. By bridging the gap between theoretical understanding and practical use, this seminar empowers participants to engage with emerging trends and contribute to India's growing digital and IoT ecosystem.
        </p>
      </div>

      {/* Image Slider */}
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Event Highlights</h2>
        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-4 transition-all duration-300"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full sm:min-w-[250px] sm:h-[400px] h-[550px] bg-white/10 rounded-lg overflow-hidden shadow-md flex-shrink-0"
            >
              <img
                src={src}
                alt={`Event highlight ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-white' : 'bg-white/40'
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeminarPage;
