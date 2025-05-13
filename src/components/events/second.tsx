import React from "react";

const ZeroEvent: React.FC = () => {
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
        paddingInline: "20px",
      }}
    >
      <div style={{ maxWidth: "800px" }}>
        <h1>
          A hands-on approach towards IoT after full basic knowledge and background given to the students.
        </h1>
        <p>
          Organised by: <i>ThinkIoT lab</i>
        </p>
      </div>
    </div>
  );
};

export default ZeroEvent;