const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const fetchSales = async ({
  search,
  filters,
  sortBy,
  sortOrder,
  page,
  pageSize
}) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);

  const appendMulti = (key, arr) => {
    if (arr && arr.length) params.append(key, arr.join(","));
  };

  appendMulti("regions", filters.regions);
  appendMulti("genders", filters.genders);
  appendMulti("categories", filters.categories);
  appendMulti("tags", filters.tags);
  appendMulti("paymentMethods", filters.paymentMethods);

  const [ageMin, ageMax] = filters.ageRange || [];
  if (ageMin) params.append("ageMin", ageMin);
  if (ageMax) params.append("ageMax", ageMax);

  if (filters.dateFrom) params.append("dateFrom", filters.dateFrom);
  if (filters.dateTo) params.append("dateTo", filters.dateTo);

  if (sortBy) params.append("sortBy", sortBy);
  if (sortOrder) params.append("sortOrder", sortOrder);

  params.append("page", page || 1);
  params.append("pageSize", pageSize || 10);

  const res = await fetch(`${BASE_URL}/api/sales?${params.toString()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch sales");
  }
  return res.json();
};
