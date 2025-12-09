import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <>
      <span className="filter-label">Search</span>
      <input
        type="text"
        placeholder="Customer name or phone…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="filter-select"
        style={{ background: "#ffffff" }}
      />
    </>
  );
};

export default SearchBar;
