import React from 'react'
import { FaSearch } from 'react-icons/fa';
import "./Search.css";

export const Search = () => {
  return (
    <div className="search-box">
    <input type="text" placeholder="Search course Name " />
    <FaSearch className="search-icon" />
  </div>
  )
}
