import React from "react";

const SalesTable = ({ rows }) => {
  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Customer</th>
          <th>Phone</th>
          <th>Region</th>
          <th>Gender</th>
          <th>Product</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Final Amount</th>
          <th>Payment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            <td>
              {/* handle missing/invalid dates safely */}
              {row.Date ? new Date(row.Date).toLocaleDateString() : "-"}
            </td>
            <td>{row["Customer Name"] || row.CustomerName}</td>
            <td>{row["Phone Number"] || row.PhoneNumber}</td>
            <td>{row["Customer Region"] || row.CustomerRegion}</td>
            <td>{row.Gender || "-"}</td>
            <td>{row["Product Name"] || row.ProductName}</td>
            <td>{row["Product Category"] || row.ProductCategory}</td>
            <td>{row.Quantity}</td>
            <td>{row["Final Amount"] || row.FinalAmount}</td>
            <td>{row["Payment Method"] || row.PaymentMethod}</td>
            <td>{row["Order Status"] || row.OrderStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
