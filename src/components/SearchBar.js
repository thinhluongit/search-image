import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleEnterSearch = (e) =>{
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full
        indent-2 p-2.5 outline-none focus:border-blue-500
        focus:ring-2 rounded-tl rounded-bl"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleEnterSearch}
      />
      <button
        className="bg-blue-600 px-6 py-2.5 text-white"
        onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
