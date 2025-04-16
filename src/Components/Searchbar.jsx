import React from 'react';

export default function Searchbar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search: colors, spacing..."
      onChange={(e) => onSearch(e.target.value.toLowerCase())}
      className="p-2 rounded border border-gray-300"
    />
  );
}
