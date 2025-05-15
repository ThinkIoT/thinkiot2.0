import React from "react";

const Event1: React.FC = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom right, #0d1b2a, #1b263b)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        
      }}
    >
      <div style={{ maxWidth: "800px" }}>
        <h1>Seminar on IoT platform</h1>
        <p>
          Organised by: <i>ThinkIoT lab</i>
        </p>
        <p>
          <b>1st floor, PG & Research Building, BCREC, Durgapur</b>
        </p>
      </div>
    </div>
  );
};

export default Event1;