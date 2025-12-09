import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import SortDropdown from "../components/SortDropdown";
import SalesTable from "../components/SalesTable";
import Pagination from "../components/Pagination";
import EmptyState from "../components/EmptyState";
import { fetchSales } from "../services/api";

const SalesPage = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    regions: [],
    genders: [],
    ageRange: [null, null],
    categories: [],
    tags: [],
    paymentMethods: [],
    dateFrom: "",
    dateTo: ""
  });
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 1
  });
  const [loading, setLoading] = useState(false);

  const loadSales = async () => {
    setLoading(true);
    try {
      const response = await fetchSales({
        search,
        filters,
        sortBy,
        sortOrder,
        page,
        pageSize: 10
      });
      setData(response.data);
      setPageInfo({
        page: response.page,
        pageSize: response.pageSize,
        totalItems: response.totalItems,
        totalPages: response.totalPages
      });
    } catch (err) {
      console.error("Error loading sales:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSales();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filters, sortBy, sortOrder, page]);

  const handleFilterChange = (patch) => {
    setPage(1);
    setFilters((prev) => ({ ...prev, ...patch }));
  };

  const handleSearchChange = (value) => {
    setPage(1);
    setSearch(value);
  };

  const handleSortChange = ({ sortBy, sortOrder }) => {
    setPage(1);
    setSortBy(sortBy);
    setSortOrder(sortOrder);
  };

  return (
    <div className="page-wrapper">
      {/* === FILTER STRIP (single row of dropdowns) === */}
      <section className="filters-card">
        <div className="filters-title-row">
          <div>
            <h2>Retail Sales Management</h2>
          </div>
        </div>

        <div className="filters-row">
          {/* Search chip */}
          <div className="filter-chip">
            <SearchBar value={search} onChange={handleSearchChange} />
          </div>

          {/* Other filters */}
          <FilterPanel filters={filters} onChange={handleFilterChange} />
        </div>
      </section>

      {/* === TABLE SECTION === */}
      <section className="table-card">
        <div className="sales-toolbar">
          <div>
            <h3 style={{ margin: 0, fontSize: "14px", fontWeight: 600 }}>
              Transactions
            </h3>
            <p
              style={{
                fontSize: "12px",
                color: "#80736bff",
                margin: "2px 0 0"
              }}
            >
              Showing paginated sales data with applied filters.
            </p>
          </div>
          <SortDropdown
            sortBy={sortBy}
            sortOrder={sortOrder}
            onChange={handleSortChange}
          />
        </div>

        {loading ? (
          <div className="loader">Loading...</div>
        ) : data.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <SalesTable rows={data} />
            <Pagination
              page={pageInfo.page}
              totalPages={pageInfo.totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default SalesPage;
