// SearchBar.jsx

import React, { useState } from 'react';
import { Button } from "react-bootstrap";

const TransactionIdSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={{ display: 'flex', gap: '80px', fontSize:"1.2rem" , textAlign:"left"}}>
      <input
        type="text"
        placeholder="Transaction id"
        value={searchTerm}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }}
      />
      
      <Button variant="primary" onClick={handleSearch} >Search</Button>
    </div>
  );
};

export default TransactionIdSearchBar;