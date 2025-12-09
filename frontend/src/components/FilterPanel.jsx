import React from "react";

const FilterPanel = ({ filters, onChange }) => {
  const handleSingleSelectChange = (key, value) => {
    if (!value) {
      onChange({ [key]: [] });
    } else {
      onChange({ [key]: [value] });
    }
  };

  const handleAgeChange = (index, value) => {
    const next = [...(filters.ageRange || [null, null])];
    next[index] = value ? Number(value) : null;
    onChange({ ageRange: next });
  };

  return (
    <>
      {/* CUSTOMER REGION */}
      <div className="filter-chip">
        <span className="filter-label">Customer Region</span>
        <select
          className="filter-select"
          value={filters.regions[0] || ""}
          onChange={(e) =>
            handleSingleSelectChange("regions", e.target.value)
          }
        >
          <option value="">All</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
          {/* GENDER */}
      <div className="filter-chip">
        <span className="filter-label">Gender</span>
        <select
          className="filter-select"
          value={filters.genders[0] || ""}
          onChange={(e) =>
            handleSingleSelectChange("genders", e.target.value)
          }
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      </div>

    
      {/* AGE RANGE */}
      <div className="filter-chip">
        <span className="filter-label">Age Range</span>
        <div className="filter-range-box">
          <input
            className="filter-input-range"
            type="number"
            placeholder="Min"
            value={filters.ageRange?.[0] || ""}
            onChange={(e) => handleAgeChange(0, e.target.value)}
          />
          <span style={{ fontSize: "12px", color: "#6b7280" }}>–</span>
          <input
            className="filter-input-range"
            type="number"
            placeholder="Max"
            value={filters.ageRange?.[1] || ""}
            onChange={(e) => handleAgeChange(1, e.target.value)}
          />
        </div>
      </div>

      {/* PRODUCT CATEGORY */}
      <div className="filter-chip">
        <span className="filter-label">Product Category</span>
        <select
          className="filter-select"
          value={filters.categories[0] || ""}
          onChange={(e) =>
            handleSingleSelectChange("categories", e.target.value)
          }
        >
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Grocery">Grocery</option>
        </select>
      </div>

      {/* TAG */}
      <div className="filter-chip">
        <span className="filter-label">Tag</span>
        <select
          className="filter-select"
          value={filters.tags[0] || ""}
          onChange={(e) => handleSingleSelectChange("tags", e.target.value)}
        >
          <option value="">All</option>
          <option value="New Arrival">New Arrival</option>
          <option value="Discount">Discount</option>
          <option value="Trending">Trending</option>
        </select>
      </div>

      {/* PAYMENT METHOD */}
      <div className="filter-chip">
        <span className="filter-label">Payment Method</span>
        <select
          className="filter-select"
          value={filters.paymentMethods[0] || ""}
          onChange={(e) =>
            handleSingleSelectChange("paymentMethods", e.target.value)
          }
        >
          <option value="">All</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
        </select>
      </div>

      {/* DATE FROM */}
      <div className="filter-chip">
        <span className="filter-label">Date From</span>
        <input
          className="filter-input"
          type="date"
          value={filters.dateFrom || ""}
          onChange={(e) => onChange({ dateFrom: e.target.value })}
        />
      </div>

      {/* DATE TO */}
      <div className="filter-chip">
        <span className="filter-label">Date To</span>
        <input
          className="filter-input"
          type="date"
          value={filters.dateTo || ""}
          onChange={(e) => onChange({ dateTo: e.target.value })}
        />
      </div>
    </>
  );
};

export default FilterPanel;
