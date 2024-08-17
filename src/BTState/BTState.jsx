import React, { useState } from "react";
import data from "./dataglasses.json";

export const BTState = () => {
  const [state, setState] = useState("./img/v1.png");

  const handleGlasses = (url) => {
    setState(url);
  };
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
          <button className="btn btn-success m-4">
            <img
              style={{ width: 50 }}
              src="./img/v1.png"
              alt="..."
              onClick={() => setState("./img/v1.png")}
            />
          </button>
          <button className="btn btn-success m-4">
            <img
              style={{ width: 50 }}
              src="./img/v2.png"
              alt="..."
              onClick={() => setState("./img/v2.png")}
            />
          </button>
          <button className="btn btn-success m-4">
            <img
              style={{ width: 50 }}
              src="./img/v3.png"
              alt="..."
              onClick={() => setState("./img/v3.png")}
            />
          </button>
          <button className="btn btn-success m-4">
            <img
              style={{ width: 50 }}
              src="./img/v4.png"
              alt="..."
              onClick={() => setState("./img/v4.png")}
            />
          </button>
          <button className="btn btn-success m-4">
            <img
              style={{ width: 50 }}
              src="./img/v5.png"
              alt="..."
              onClick={() => setState("./img/v5.png")}
            />
          </button>
          <br />
          <button className="btn btn-success m-4">
            <img
              style={{ width: 50 }}
              src="./img/v6.png"
              alt="..."
              onClick={() => setState("./img/v6.png")}
            />
          </button>
          <button className="btn btn-success m-4">
            <img
              style={{ width: 50 }}
              src="./img/v7.png"
              alt="..."
              onClick={() => setState("./img/v7.png")}
            />
          </button>
          <button className="btn btn-success m-4">
            <img
              style={{ width: 50 }}
              src="./img/v8.png"
              alt="..."
              onClick={() => setState("./img/v8.png")}
            />
          </button>
          <button className="btn btn-success m-4">
            <img
              style={{ width: 50 }}
              src="./img/v9.png"
              alt="..."
              onClick={() => setState("./img/v9.png")}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
