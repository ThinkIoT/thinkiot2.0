import React, { useState } from "react";
import CoreCard from "./coreCard";
import CoreTeam from "./coreTeam";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../navbar";

export default function Teams() {
  const [filter, setFilter] = useState("All");

  const filterBySecondYear = () => setFilter("2nd Year");
  const filterByThirdYear = () => setFilter("3rd Year");
  const filterByFourthYear = () => setFilter("4th Year");
  const filterByAlumni = () => setFilter("Alumni");
  const filterByFacultyAdvisor = () => setFilter("Faculty Advisor");
  const resetFilter = () => setFilter("All");

  const filteredTeam = filter === "All" ? CoreTeam : CoreTeam.filter(core => core.category === filter);

  React.useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <Navbar />
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
            <div className="flex justify-center gap-5 mb-36">
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
