// frontend/src/App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header-inner">
          <div>
            <h1 className="app-header-title">Retail Sales Management</h1>
            <p className="app-header-subtitle">
            </p>
          </div>
          <span className="app-header-pill">Dashboard</span>
        </div>
      </header>

      <main className="app-main">
        <div className="page-container">
          <AppRoutes />
        </div>
      </main>
    </div>
  );
};

export default App;

