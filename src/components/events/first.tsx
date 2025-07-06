import React, { useRef, useState, useEffect } from 'react';

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

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }, 3000); // scroll every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] text-white flex items-center justify-center p-5">
      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row justify-between items-start gap-10">

        {/* Seminar Info - Left Side (Wider Width) */}
        <div className="lg:w-3/5 w-full text-left px-4">
          <h1 className="text-4xl font-bold mb-6">
            All India Seminar on Introduction to IoT Platform
          </h1>
          <ul className="list-disc pl-6 text-xl leading-relaxed space-y-4">
            <li>
              The <i>All India Seminar on Introduction to IoT Platform</i> is a national-level initiative to raise awareness about IoT.
            </li>
            <li>
              Organized by <i>The Institute of Engineers (India), Durgapur Local Centre</i> under the guidance of the Computer Engineering Division of IEI.
            </li>
            <li>
              Collaborated with <b>ThinkIoT Lab</b> to bridge the gap between academia and industry.
            </li>
            <li>
              Features expert lectures, interactive sessions, and live demos.
            </li>
            <li>
              Includes a <i>Special Session for Idea and Paper Submission</i> for innovative minds.
            </li>
            <li>
              Bridges theory and practice in India’s digital and IoT ecosystem.
            </li>
          </ul>
        </div>

        {/* Event Highlights - Right Side */}
        <div className="lg:w-2/5 w-full flex flex-col items-end px-4">
          <div className="w-full flex justify-center mb-4">
            <h2 className="text-3xl font-semibold text-center">Event Highlights</h2>
          </div>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide w-full scroll-smooth"
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-[280px] h-[380px] bg-white/10 rounded-lg overflow-hidden shadow-md flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`Event highlight ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2 w-full">
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
    </div>
  );
};

export default SeminarPage;
