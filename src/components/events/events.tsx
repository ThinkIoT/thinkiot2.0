import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../navbar";
import eventCardData from "./eventCardData";
import EventCard from "./eventCard";

export default function Event() {
  React.useEffect(() => {
    AOS.init();
    
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#0a192f] bg-blend-overlay text-white">
        <section className="mx-auto mb-50 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
          <article className="col-auto mb-10">
            <div data-aos="fade-up" data-aos-duration="1000" className="mb-20">
              <h1 className="title-font mb-20 mt-36 text-center text-2xl font-medium text-gray-100 sm:text-3xl">  
                Upcoming Event & Workshops
              </h1>

              <div className="flex flex-col rounded-lg bg-gray-800 xl:flex-row shadow-xl">
                <img
                  className="w-auto rounded-t-lg sm:h-72 xl:h-96 xl:rounded-l-lg xl:rounded-t-none"
                  src="/img/Enigma.jpg"
                  alt="Encrypta 2.0 event banner"
                />
                <div className="p-10 xl:p-16">
                  <div className="mb-8">
                    <h1 className="mb-4 w-full text-2xl text-gray-100 font-semibold">
                      <span className="text-red-500">ENIGMA</span>
                    </h1>
                    <p className="text-gray-100">
                    Unlock the secrets of the connected world at Enigma — an exciting IoT workshop hosted by the Think-IOT Research Lab! Dive into smart technologies, build innovative solutions, and shape the future of connectivity.
                    </p>
                    <p className="text-gray-400 mt-4">
                      <strong>Date:</strong> 16/05/2025
                    </p>
                    <p className="text-gray-400">
                      <strong>Time:</strong> 10:30 AM Onwards
                    </p>
                    <p className="text-gray-400">
                      <strong>Location:</strong> Albert Einstein Hall
                    </p>
                  </div>
                  <div>
                    <a
                      href="/eventdetails"
                      className="focus:outline-none mt-10 rounded-full bg-red-600 p-2 px-4 text-center font-semibold shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:ring"
                    >
                      Register Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="mt-10 text-center">
              <p className="title-font mb-4 text-center text-2xl font-medium text-gray-100 sm:text-3xl">
                Previous Events
              </p>
            </div>
            <section className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {eventCardData.map(events => (
                <EventCard events={events} key={events.title} />
              ))}
            </section>
          </article>
        </section>
      </div>
    </div>
  );
}
