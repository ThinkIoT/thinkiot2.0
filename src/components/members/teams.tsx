import React, { useState } from "react";
import CoreCard from "./coreCard";
import CoreTeam from "./coreTeam";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Teams() {
  const [filter, setFilter] = useState("All");
  const [alumniBatch, setAlumniBatch] = useState<string | null>(null);

  const filterBySecondYear = () => {
    setFilter("2nd Year");
    setAlumniBatch(null);
  };
  const filterByThirdYear = () => {
    setFilter("3rd Year");
    setAlumniBatch(null);
  };
  const filterByFourthYear = () => {
    setFilter("4th Year");
    setAlumniBatch(null);
  };
  const filterByAlumni = () => {
    setFilter("Alumni");
    setAlumniBatch(null);
  };
  const filterByFacultyAdvisor = () => {
    setFilter("Faculty Advisor");
    setAlumniBatch(null);
  };
  const resetFilter = () => {
    setFilter("All");
    setAlumniBatch(null);
  };

  let filteredTeam = filter === "All" ? CoreTeam : CoreTeam.filter(core => core.category === filter);

  // Further filter alumni by batch if selected
  if (filter === "Alumni" && alumniBatch) {
    filteredTeam = filteredTeam.filter(core => core.designation === alumniBatch);
  }

  React.useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#0a192f] bg-blend-overlay text-white">
        <section className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6">
          <article className="col-auto mb-10 mt-10">
            <div
              id="padding"
              data-aos-duration="1000"
              className="title-font mt-20 mb-10 text-center text-2xl font-medium text-white sm:text-3xl"
            >
              <p>Enthusiastic members of THINK-IOT.</p>
            </div>

            {/* Year filters */}
            <div className="flex justify-center gap-5 mb-12 flex-wrap">
              <button
                onClick={resetFilter}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                ALL
              </button>
              <button
                onClick={filterByFacultyAdvisor}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                Faculty Advisor
              </button>
              <button
                onClick={filterByFourthYear}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                4th Year
              </button>
              <button
                onClick={filterByThirdYear}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                3rd Year
              </button>
              <button
                onClick={filterBySecondYear}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                2nd Year
              </button>
              <button
                onClick={filterByAlumni}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                Alumni
              </button>
            </div>

            {/* Alumni batch buttons */}
              {filter === "Alumni" && (
              <div className="grid grid-cols-3 grid-rows-3 gap-6 justify-center mb-16 max-w-xl mx-auto">
                <button
                  onClick={() => setAlumniBatch("Batch 2017")}
                  className={`col-start-1 row-start-1 px-6 py-4 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white ${
                    alumniBatch === "Batch 2017" ? "ring-4 ring-pink-300" : ""
                  }`}
                >
                  Batch of 2017
                </button>
                <div className="col-start-2 row-start-1"></div>
                <div className="col-start-3 row-start-1"></div>
                <div className="col-start-1 row-start-2"></div>
                <button
                  onClick={() => setAlumniBatch("Batch 2018")}
                  className={`col-start-2 row-start-2 px-6 py-4 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 text-white ${
                    alumniBatch === "Batch 2018" ? "ring-4 ring-green-300" : ""
                  }`}
                >
                  Batch of 2018
                </button>
                <div className="col-start-3 row-start-2"></div>
                <div className="col-start-1 row-start-3"></div>
                <div className="col-start-2 row-start-3"></div>
                <button
                  onClick={() => setAlumniBatch("Batch 2019")}
                  className={`col-start-3 row-start-3 px-6 py-4 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90 text-white ${
                    alumniBatch === "Batch 2019" ? "ring-4 ring-yellow-300" : ""
                  }`}
                >
                  Batch of 2019
                </button>
              </div>
            )}

            {/* Display cards */}
            <section className="flex flex-wrap justify-center gap-5">
              {filteredTeam.map(core => (
                <CoreCard core={core} key={core.name} />
              ))}
            </section>
          </article>
        </section>
      </div>
    </div>
  );
}
