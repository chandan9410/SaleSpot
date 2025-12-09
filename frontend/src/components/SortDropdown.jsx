import React from "react";

const SortDropdown = ({ sortBy, sortOrder, onChange }) => {
  const handleSortByChange = (e) => {
    onChange({ sortBy: e.target.value, sortOrder });
  };

  const handleOrderChange = (e) => {
    onChange({ sortBy, sortOrder: e.target.value });
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        borderRadius: "999px",
        border: "1px solid #e5e7eb",
        padding: "6px 10px",
        background: "#ffffff",
        fontSize: "12px"
      }}
    >
      <div>
        <span style={{ color: "#6b7280", marginRight: "4px" }}>Sort by</span>
        <select
          value={sortBy}
          onChange={handleSortByChange}
          style={{
            borderRadius: "6px",
            border: "1px solid #e5e7eb",
            padding: "3px 6px",
            fontSize: "12px"
          }}
        >
          <option value="date">Date (Newest First)</option>
          <option value="quantity">Quantity</option>
          <option value="customerName">Customer Name (A–Z)</option>
        </select>
      </div>
      <div
        style={{
          width: "1px",
          height: "18px",
          background: "#e5e7eb"
        }}
      />
      <div>
        <span style={{ color: "#6b7280", marginRight: "4px" }}>Order</span>
        <select
          value={sortOrder}
          onChange={handleOrderChange}
          style={{
            borderRadius: "6px",
            border: "1px solid #e5e7eb",
            padding: "3px 6px",
            fontSize: "12px"
          }}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    </div>
  );
};

export default SortDropdown;
