import React from 'react';

const SeminarPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] text-white p-5 text-center">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">All India Seminar on Introduction to IoT platform</h1>
        <p className="mb-4">
          Organised by: <i>The Institute of Engineers (India), Durgapur Local Centre,</i><br />
          Under the aegis of Computer Engineering Division, IEI
        </p>
        <p className="mb-4">
          In association with:<br />
          <b>ThinkIoT lab</b>
        </p>
        <p className="text-lg font-semibold">
          Special Session for Idea and Paper submission
        </p>
      </div>
    </div>
  );
};

export default SeminarPage;