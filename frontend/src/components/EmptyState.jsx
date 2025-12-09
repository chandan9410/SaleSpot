import React from "react";

const EmptyState = ({ message }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        color: "#6b7280",
        fontSize: "13px"
      }}
    >
      {message || "No transactions found. Try adjusting filters or search."}
    </div>
  );
};

export default EmptyState;
