import React from "react";

function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex gap-4 mb-4">
      <input name="country" value={filters.country} onChange={handleChange} placeholder="Страна" className="border p-2" />
      <input name="offer" value={filters.offer} onChange={handleChange} placeholder="Название оффера" className="border p-2" />
    </div>
  );
}

export default Filters;
