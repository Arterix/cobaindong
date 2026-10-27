import React from "react";

const KopiCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        border: "1px solid #e0d0c1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "12px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: "#666666",
            lineHeight: "1.4",
          }}
        >
          {props.name}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: "#666666",
            lineHeight: "1.4",
          }}
        >
          {props.kode}
        </p>
      </div>
    </div>
  );
};

export default KopiCard;
