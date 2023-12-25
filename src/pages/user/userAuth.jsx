import "./css/userAuth.css";
import UserAuthContent from "../../assets/userAuthContent.png";
import { Link,useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import {useState,useEffect} from "react"
import axiosInstance from '../../axiosInstance'
import { ErrorModal } from "../../components/user/popupModal";
function CommonPart(props){
  return(
    <>
    <Link to="/">
    {" "}
    <button className="backButton">Back</button>
  </Link>

  <div className="d-none d-md-flex leftContainer">
    <div className="leftContent">
      <div className="leftText">
        <h2>
          {props.title}
          <br />
          New Update Available
        </h2>
        <h3>
          We have Added Some New
          <br /> Awesome Features
        </h3>
      </div>
      <img src={UserAuthContent} />
    </div>
  </div>
  </>
  )
}

function CustomForm(props){
  return(
    <>
    <Form.Control
              className="rightForm"
               onChangeCapture={props.onChange}
              size="lg"
               defaultValue={props.val}
              type={props.type}
              name={props.name}
              placeholder={props.placeholder}
              aria-label={props.placeholder}
            /></>
  )
}
export function UserSignIn() {
  const [showModal, setShowModal] = useState(false);
  const navigate= useNavigate()

  const [user,setUser]=useState({
    email_or_phone:'',
    password:'',
  })
const [error,setError]=useState(null)

  const Submit=async()=>{
    const checker=Object.values(user).some((value)=>value=='')
    if (checker){
      setError("Fill all values before proceeding")
      setShowModal(true)
    }
   try{
    const response=await axiosInstance.post('/auth/login/',user)
    if (response.status<400){
      setError(null)
    }
    localStorage.setItem('accessToken',response.data.token.access)
    setShowModal(false)
   navigate('/transfer')
  }catch(error){
    setError(error.response.data.error)

    setShowModal(true)

    }
  }



  const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({
      ...user,[name]:value
    })
  }

  return (
    <>
      {showModal && (
        <ErrorModal
          color='red'
          show={true}
          closeModal={setShowModal}
          error={error}
        />
      )}
  
    
    <div className="mainContainer">
     <CommonPart title="Welcome Back"/>

      <div className=" rightContainer">
        <div className="rightContent">
            <h2>Logo</h2>
            <CustomForm onChange={handleChange} name="email_or_phone" type="text" placeholder="Email Or Phone" />
           
            <br />
            <CustomForm onChange={handleChange}  name="password" type="password" placeholder="Password" />
            <button onClick={Submit} className="loginButton" >Login</button>
            <p >You dont have an account?<Link to="/userRegister">Register Here</Link></p>
          </div>

      </div>
    </div>
    </>

  );
}

export function UserRegister() {
  const [showModal, setShowModal] = useState(false);
  const navigate= useNavigate()

  const [user,setUser]=useState({
    name:'',
    email:'',
    country:'',
    mobileNumber:'',
    password:'',
    phone_number:'',
  })
const [error,setError]=useState(null)

  const Submit=async()=>{
    const checker = Object.values(user).some((value) => value === "");
    if (checker){
      setError("Fill all values before proceeding")
      setShowModal(true)
      return
    }
   try{
    const response=await axiosInstance.post('/auth/register/',user)
    if (response.status<400){
      setError(null)
    }
    localStorage.setItem('accessToken',response.data.token.access)
    setShowModal(false)
    navigate('/transfer')

  }catch(error){
    setShowModal(true)
      setError(error.response.data.error)
      

    }
  }
  const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({
      ...user,[name]:value
    })
  }
  return (
    <>
      {showModal && (
        <ErrorModal
          color='red'
          show={true}
          closeModal={setShowModal}
          error={error}
        />
      )}
  
    <div className="mainContainer">

      <CommonPart title="Registration Now"/>
      <div className=" rightContainer">
        <div className="rightContent">
      

            <h2 style={{marginTop:'0px',marginBottom:'4px'}}>Logo</h2>
            <CustomForm onChange={handleChange} val={user.name} name="name" type="text" placeholder="Name" />
            <CustomForm onChange={handleChange} val={user.email} name="email" type="text" placeholder="Email " />
            <CustomForm onChange={handleChange} val={user.country} name="country" type="text" placeholder="Country" />
            <CustomForm onChange={handleChange} val={user.phone_number} name="phone_number" type="text" placeholder="MobileNumber(eg:+91 xxxxxxxx)" />
            <CustomForm onChange={handleChange} val={user.password} name="password" type="password" placeholder="Password" />
            <CustomForm onChange={handleChange} val={user.confirmPassword} name="confirmPassword" type="password" placeholder="Confirm Password" />

            
            <button onClick={Submit} style={{marginTop:'1px'}} className="loginButton" >Register</button>
            <p >Already have an account?<Link to="/userLogin">Login Here</Link></p>
          </div>

      </div>
      </div>
      
</>
    )
}
