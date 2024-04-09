import React, { useState } from "react";
import "../Styles/searchbar.css"; // Import CSS file for styling

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearch = () => {
    setIsLoading(true); // Set loading to true when search is initiated
    // Here you can perform your search logic, such as fetching data from an API
    // For demonstration purposes, I'm simulating a delay with setTimeout
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after the search operation is complete
      // Do something with the searchQuery, for example, fetch data
      console.log("Search query:", searchQuery);
    }, 2000); // Simulating a 2-second delay
  };

  return (
    <div className={`search-container ${isFocused ? "focused" : ""}`}>
      <input
        type="text"
        className="search-bar text-black"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button className="search-button" onClick={handleSearch}>
        {isLoading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <i className="fas fa-search"></i>
        )}
      </button>
    </div>
  );
};

export default SearchBar;
