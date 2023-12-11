import axios from "axios";
import { useState,useEffect } from "react";
import { Button,Col } from "react-bootstrap";
import { SenderCard, ReceiverCard } from "../../components/user/card";
import {  TransferModel } from "../../components/user/model";
import axiosInstance from '../../axiosInstance';

export function Transfer() {
    const [csrf_token,set_csrfToken]=useState(null)
    const [error,showError]=useState(null)
    const [show,setShow]=useState(false);
    const [exchangeRateArr,setExchangeRateArr]=useState(null)
    const [exchangeRate,setExchangeRate]=useState(0)
    const [senderCountry,setSenderCountry]=useState('USD')
    const [receiverCountry,setReceiverCountry]=useState('NPR')
    const [inputAmount,setinputAmount]=useState(0)
    const [outputAmount,setoutputAmount]=useState(0)

    //holds all sender data
    const [sender,setSender]=useState({
      senderFirstName:'',
      senderLastName:'',
      senderEmail:'',
      senderPhoneNumber:'',
      senderCountry:'',
      senderCity:'',
      senderAddress:'',
      // senderBankName:'',
      senderCurrencyCode:'',
      
    })
    
    //holds all receiver data
    const [receiver,setReceiver]=useState({
      receiverFullName:'',
      receiverBankName:'',
      receiverBankAccountNumber:'',
      receiverCurrencyCode:'',
    })

    const startTransfer=async()=>{
     try{
      //  const get_token=await axiosInstance.get('/auth/get_token')
      // set_csrfToken(get_token.data.csrf_token)
      console.log(csrf_token)
      const isAnyValueEmptySender = Object.values(sender).some((value) => value === '');
      const isAnyValueEmptyReceiver = Object.values(receiver).some((value) => value === '');
      if (isAnyValueEmptyReceiver||isAnyValueEmptySender||inputAmount<=0){
        showError("Some Values are Empty")
        alert("error for now")

      }else{
          setShow(true)
          const logindata={
            email_or_phone:"san@gmail.com",
            password:"sandesh"
          }
          
          const login = await axiosInstance.post('/auth/login/', logindata);
          const { access } = login.data.token;
          
          // Store the access token in localStorage or as needed
          localStorage.setItem('accessToken', access); 
          const accessToken = localStorage.getItem('accessToken');

          const response = await axios.get('http://127.0.0.1:8000/auth/verify_user/', {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });
          console.log(response);
          const dataToSend = {
            sender: sender,
            receiver: receiver,
            sentAmount: inputAmount,
            receivedAmount:outputAmount
          };
      
          const data=await axiosInstance.post('/transaction/newTransaction/',dataToSend,{
            headers:{
              Authorization:`Bearer ${acessToken}`
            }
          })
      }
    }catch(error){
      console.log('error'+error)
    }
  }
 
    useEffect(()=>{
      //get Rate from api everytime sender country changes
      const getRate = async () => {
        try {
          const response = await axios.get(
    `https://v6.exchangerate-api.com/v6/a088c8583f32b5f3e682b9d5/latest/${senderCountry}`)

          setExchangeRateArr(response.data.conversion_rates);
          if (exchangeRateArr){
          setExchangeRate(exchangeRateArr[receiverCountry])
         }
        } catch (error) {
          console.error('Error fetching conversion rate:', error);
        }
      };
      getRate()
      setSender({...sender,'senderCurrencyCode':senderCountry})

    },[senderCountry])
    
    //everytime receiver country changes rate is calculated again 
    useEffect(()=>{
      const setRate=()=>{
        if (exchangeRateArr){
          setExchangeRate(exchangeRateArr[receiverCountry])
         }      }
      setRate()
      if (exchangeRateArr){
        setoutputAmount(inputAmount*exchangeRateArr[receiverCountry])

       }
       setReceiver({...receiver,'receiverCurrencyCode':receiverCountry})
    },[receiverCountry,exchangeRateArr])

    useEffect(()=>{
      const rateCalculator=()=>{
        setoutputAmount(inputAmount*exchangeRate)
      }
      rateCalculator()
      console.log(outputAmount)
    },[inputAmount])


  return (
    <>
    { show && <TransferModel setShow={setShow}/> }
      <div style={{ backgroundColor: "#dfe6ee", padding: "30px 0px 0px 80px" }}>
        <p style={{ color: "#797b7d", fontSize: "1.2rem" ,paddingLeft:'5%',paddingBottom:'0px'}}>Money Transfer</p>
        <div  style={{ display: "flex", justifyContent: "space-around" }}>
          <Col xs={6} md={6}>

          <SenderCard setSenderData={setSender} sender={sender} receiverCountry={receiverCountry}senderCountry={senderCountry} exchangeRate={exchangeRate}setinputAmount={setinputAmount} setSenderCountry={setSenderCountry}/>
          </Col>
          <Col md={6}>

          <ReceiverCard receiver={receiver} setReceiverData={setReceiver} receiverCountry={receiverCountry} outputAmount={outputAmount} setReceiverCountry={setReceiverCountry}/>
          </Col>
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
            onClick={()=>{
              startTransfer()
            }}
          >
            Start Transfer
          </Button>
        </div>
      </div>
    </>
  );
}

