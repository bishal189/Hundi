import React, { useState, useEffect } from "react";
import { SenderAgentTable } from "./agentTable";
import { Table, Button } from "react-bootstrap";
import AxiosInstance from "../../axiosInstance";
import { HomeHeader } from "../../components/user/homeheader";
import ClientSearchBar from "./ClientSearchbar";

const SenderAgent = () => {
  const [senderAgent, setSenderAgent] = useState([]);
  const [filteredSenderAgent, setFilteredSenderAgent] = useState([]);

  useEffect(() => {
    async function getSenderAgent() {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await AxiosInstance.get("transaction/getSenderAgent", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setSenderAgent(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSenderAgent();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredResults = senderAgent.filter((item) =>
      item.consumerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSenderAgent(filteredResults);
  };

  return (
    <>
      <HomeHeader />
      <div style={{ backgroundColor: "#dfe6ee" }} className="payContainer">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "1.5rem", padding: "20px" }}>Sender Agent</div>

          <div style={{ fontSize: "1.4rem", padding: "25px" }}>
            <ClientSearchBar onSearch={handleSearch} />
          </div>
        </div>
        <SenderAgentTable list={filteredSenderAgent.length > 0 ? filteredSenderAgent : senderAgent} />
      </div>
    </>
  );
};

export default SenderAgent;
