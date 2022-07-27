import React from "react";

const Card = ({ header, body, footer }) => {
  const cardStyle = {
    color: "white",
    fontSize: 200,
  };
  return (
    <div style={cardStyle}>
      <div style={{ color: "blue" }}>{header}</div>
      <div style={{ color: "red" }}>{body}</div>
      <div style={{ color: "black" }}>{footer}</div>
    </div>
  );
};

export default Card;
