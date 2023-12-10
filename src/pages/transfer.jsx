import axios from "axios";
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import { SenderCard, ReceiverCard } from "../components/card";
import { ReceiverModel, TransferModel } from "../components/model";

export function Transfer() {
    const [show,setShow]=useState(false);
    const [exchangeRateArr,setExchangeRateArr]=useState(null)
    const [exchangeRate,setExchangeRate]=useState(0)
    const [senderCountry,setSenderCountry]=useState('USD')
    const [receiverCountry,setReceiverCountry]=useState('NPR')
    const [inputAmount,setinputAmount]=useState(0)
    const [outputAmount,setoutputAmount]=useState(0)
    
    useEffect(()=>{
      const getRate = async () => {
        try {
          const response = await axios.get(
    `https://v6.exchangerate-api.com/v6/a088c8583f32b5f3e682b9d5/latest/${senderCountry}`)

          setExchangeRateArr(response.data.conversion_rates);
          exchangeRateArr&&setExchangeRate(exchangeRateArr[receiverCountry])
        } catch (error) {
          console.error('Error fetching conversion rate:', error);
        }
      };
      getRate()
    },[senderCountry])
    
    useEffect(()=>{
      const setRate=async()=>{
        exchangeRateArr&&setExchangeRate(exchangeRateArr[receiverCountry])
      }
      setRate()
    },[receiverCountry,exchangeRateArr])

    useEffect(()=>{
      const rateCalculator=()=>{
        setoutputAmount(inputAmount*exchangeRate)
      }
      rateCalculator()
    },[inputAmount])
  return (
    <>
    { show && <TransferModel setShow={setShow}/> }
      <div style={{ backgroundColor: "#dfe6ee", padding: "30px 0px 0px 80px" }}>
        <p style={{ color: "#797b7d", fontSize: "1.2rem" ,paddingLeft:'5%',paddingBottom:'0px'}}>Money Transfer</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <SenderCard senderCountry={senderCountry} setinputAmount={setinputAmount} setSenderCountry={setSenderCountry}/>
          <ReceiverCard receiverCountry={receiverCountry} outputAmount={outputAmount} setReceiverCountry={setReceiverCountry}/>
        </div>
        
        <div style={{textAlign:'center'}}>
          {" "}
          <Button
            size="lg"
            style={{
              backgroundColor: "#2E8A99",
              padding: "5px 40px",
              marginBottom:"100px"
            }}
            onClick={()=>{setShow(true)}}
          >
            Start Transfer
          </Button>
        </div>
      </div>
    </>
  );
}

