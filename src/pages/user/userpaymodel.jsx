import { Button, Col } from "react-bootstrap";
import { CustomForm } from "../../components/user/formInput";
import { useParams } from 'react-router-dom';
import { useState ,useEffect} from "react";
import _ from 'lodash'
import axiosInstance  from "../../axiosInstance";
import '../../components/user/css/formInput.css'
import { TransferModel } from "../../components/user/model";
import progress_1 from '../../assets/progress-1.png'
import  { UserBuyTable } from "../../components/user/userTable";

export function UserPayModel(props){
    const {company}=useParams()
    const [bankCards,setBankCards]=useState([])
    const [transactionHistory,setTransactionHistory]=useState([])
    const [transactChange,setTransactChange]=useState(false)

    const [showClient,setShowClient]=useState(true)
    const [show,setShow]=useState(false)
    const [consumer,setConsumer]=useState({
        'companyName':'',
        'consumerId':'',
        'consumerName':'',
        'mobileNumber':'',
        'amount':'',
        'type':'',
    })
    const [progress,setProgress]=useState(null)


    const handleConsumer=(e)=>{
        const {name,value}=e.target
        setConsumer({...consumer,[name]:value})
      }
      const handleConsumerChange = _.debounce(handleConsumer, 100);

  
    useEffect(() => {
        // Conditionally update showClient when the component mounts
        if (company === 'AirTicket' || company === 'Recharge' || company === 'Gas') {
          setShowClient(false);
        }
        setConsumer({
            ...consumer,type:company
        })
      }, [company]); // Run this effect when the company parameter changes
    

   async function handleSubmit(){
        const isAnyValueEmpty = Object.values(consumer).some(
            (value) => value === ""
          );
          if (isAnyValueEmpty){
            alert('error fill all values')
          }else{
            setShow(true)
            const accessToken=localStorage.getItem('accessToken')

            const response=await axiosInstance.get('/transaction/getBankCards/USD',{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
            })
            setBankCards(response.data.data)
            console.log(response)

            const newBuyTransaction = await axiosInstance.post(
                "/transaction/newBuyTransaction/",
                consumer,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
            )
            setTransactChange((prev)=>!prev)

            

          }
    
    }
    useEffect(()=>{
        async function history(){
          const accessToken = localStorage.getItem('accessToken');
    
          const historyTransact=await axiosInstance.get('/transaction/getBuyTransactionHistory/',{
            headers:{
              Authorization:`Bearer ${accessToken}`
            }
          })
          console.log(historyTransact)
          setTransactionHistory(historyTransact.data.data)
          console.log(transactionHistory)
        }
        history()
      },[transactChange])

    async function cancelTransaction(){
        const accessToken = localStorage.getItem("accessToken");
        const cancel = await axiosInstance.get("/transaction/cancelBuyTransaction/",{
          headers:{
            Authorization: `Bearer ${accessToken}`,
    
          }
        });
        setTransactChange((prev)=>!prev)
    
        setProgress(null)
        setShow(false)
    
      }
return(
    <>
    {progress && <img style={{margin:'50px 200px' }} src={progress} />}
    {show && <TransferModel setTransactChange={setTransactChange} cancelTransaction={cancelTransaction} bankCards={bankCards} setProgress={setProgress} consumer={consumer} title="Buy Details" setShow={()=>setShow(false)}/>}
    {!progress &&

            <div style={{height:'100vh', backgroundColor: "#dfe6ee", padding: "30px 250px 0px 250px" }}>
                <p style={{fontSize:'.90rem',margniBottom:'20px'}}>
                    Pay {company} Bill
                </p>
                <div >
                    <div style={{marginBottom:'25px'}}>
                    <CustomForm onChange={handleConsumerChange}  name="companyName" placeholder={`${company} Company Name`}/>
                    </div>
                    <div style={{marginBottom:'25px'}}>
                    {showClient  && <CustomForm onChange={handleConsumerChange} name="consumerId" placeholder="Consumer Id"/>}
                    </div>
                    <div style={{marginBottom:'25px'}}>
                    <CustomForm onChange={handleConsumerChange}  name="consumerName" placeholder={` Consumer Name`}/>
                    </div>
                    <div style={{marginBottom:'25px'}}>
                    <CustomForm  onChange={handleConsumerChange} name="mobileNumber" placeholder={` Mobile Number`}/>
                    </div>
                    <div style={{marginBottom:'25px'}}>
                    <CustomForm  onChange={handleConsumerChange} name="amount" placeholder={`Amount `}/>
                    </div>
                    <Button onClick={handleSubmit} className="customButton">From Bank</Button>

                </div>

                </div>}
                <UserBuyTable   list={transactionHistory}/>


    </>
)
}
