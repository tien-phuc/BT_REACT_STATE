import React, { useState } from "react";

export const BTState = () => {
  const [state, setState] = useState("./img/v1.png");

  const glassesImages = [
    "./img/v1.png",
    "./img/v2.png",
    "./img/v3.png",
    "./img/v4.png",
    "./img/v5.png",
    "./img/v6.png",
    "./img/v7.png",
    "./img/v8.png",
    "./img/v9.png",
  ];

  return (
    <div
      style={{
        backgroundImage: "url(./img/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container d-flex flex-column align-items-center">
        <h1 className="text-center fw-bold text-success">Bài Tập State</h1>

        <div
          style={{
            display: "grid",
            position: "relative",
            width: "fit-content", 
          }}
        >
          <img
            src="./img/model.jpg"
            alt="Model"
            style={{
              width: 170,
              marginTop: 50,
              marginBottom: 100,
              gridArea: "1 / 1",
            }}
          />
          <img
            src={state}
            alt="Glasses"
            style={{
              width: 90,
              position: "absolute",
              top: 103,
              left: 40,
              zIndex: 9999,
            }}
          />
        </div>

        <div
          className="mt-5 text-center"
          style={{ backgroundColor: "orange", borderRadius: 20 }}
        >
          {glassesImages.map((imgSrc, index) => (
            <button
              key={index}
              className="btn btn-success m-4"
              onClick={() => setState(imgSrc)}
            >
              <img
                style={{ width: 50 }}
                src={imgSrc}
                alt={`Glasses ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
