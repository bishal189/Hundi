import React, { useState } from "react";
import Select from "react-select";
import {SettingsAdmin,ButtonSettings} from "../../components/admin/adminTable";
// import {ButtonSettings} from "../../components/admin/adminTable";

const currencyOptions = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
  // Add more currency options as needed
];

const Settings = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileInput = () => {
    document.getElementById("uploadInput").click();
  };

  const handleCurrencyChange = (selectedOption) => {
    setSelectedCurrency(selectedOption);
  };

  return (
    <>
      <div style={{ backgroundColor: "#e7e7f7" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            marginTop: "12px",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              width: "165px",
              backgroundColor: "#53449F",
              borderRadius: "5px",
            }}
          >
            Settings
          </button>
          <button
            style={{
              padding: "10px",
              width: "165px",
              backgroundColor: "#F9F9FD",
              borderRadius: "5px",
            }}
          >
            Plugin
          </button>
          <button
            style={{
              padding: "10px",
              width: "165px",
              background: "#F9F9FD",
              borderRadius: "5px",
            }}
          >
            Email
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              width: "46%",
              // border: "2px solid red",
              borderRadius: "5px",
              backgroundColor: "white",
              padding: "4px",
            }}
          >
            <SettingsAdmin imagePreview={imagePreview} />
            <SettingsAdmin imagePreview={imagePreview} />
            <SettingsAdmin imagePreview={imagePreview} />
            <SettingsAdmin imagePreview={imagePreview} />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                <h4>Site currency</h4>
              </div>
              <div style={{ marginRight: "0.5rem" }}>
                <Select
                  options={currencyOptions}
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      width: "200px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      boxShadow: "none",
                    }),
                    indicatorSeparator: () => ({}),
                    dropdownIndicator: (provided) => ({
                      ...provided,
                      padding: "8px",
                    }),
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                <h4>Site timezone</h4>
              </div>
              <div style={{ marginRight: "0.5rem" }}>
                <Select
                  options={currencyOptions}
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      width: "200px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      boxShadow: "none",
                    }),
                    indicatorSeparator: () => ({}),
                    dropdownIndicator: (provided) => ({
                      ...provided,
                      padding: "8px",
                    }),
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                <h4>Site about</h4>
              </div>
              <div style={{ width: "200px" }}>
                <textarea
                  style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    boxShadow: "none",
                  }}
                />
              </div>
            </div>
          
          </div>

          {/* for right  */}
          
          <div
            style={{
              width: "46%",
              // border: "2px solid black",
              borderRadius: "5px",
            
              backgroundColor: "white",
              padding:'20px'
            }}
          >
            
           <ButtonSettings enable="#b5b9d5" disable="#ff6767" title="Email verfication" />
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication "/>
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication " />
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication "/>
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication "/>
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication "/>
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication "/>
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication "/>
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication "/>
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication "/>
           <ButtonSettings enable="#b5b9d5" disable="#ff6767"  title=" KYC Verfication "/>
           
          </div>
        </div>
      </div>

      <input
        type="file"
        id="uploadInput"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </>
  );
};

export default Settings;
