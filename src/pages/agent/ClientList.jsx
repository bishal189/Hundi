import React, { useState, useEffect } from "react";

import { AgentClientListTable } from "./agentTable";
import AxiosInstance from "../../axiosInstance";
import { HomeHeader } from "../../components/user/homeheader";
import ClientSearchBar from "./ClientSearchbar";

function ClientList() {
  const [clientList, setClientList] = useState([]);
  const [filteredClientList, setFilteredClientList] = useState([]);

  useEffect(() => {
    async function getClientList() {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await AxiosInstance.get("transaction/getClientList", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setClientList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getClientList();
  }, []);

  const handleSearch = (searchTerm) => {
    // Perform your search logic here
    // For example, filter the original client list based on the search term
    const filteredResults = clientList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredClientList(filteredResults);
  };

  return (
    <>
      <HomeHeader />
      <div style={{ backgroundColor: '#dfe6ee' }} className="payContainer">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '1.5rem', padding: '20px' }}>Client List</div>
          
          <div style={{ fontSize: '1.4rem', padding: '25px' }}>
            {/* Include the SearchBar component */}
            <ClientSearchBar onSearch={handleSearch} />
          </div>
        </div>
        {/* Pass the filtered client list to your AgentClientListTable */}
        <AgentClientListTable list={filteredClientList.length > 0 ? filteredClientList : clientList} />
      </div>
    </>
  );
}

export default ClientList;