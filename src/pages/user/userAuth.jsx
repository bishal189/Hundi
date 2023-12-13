import "./css/userAuth.css";
import UserAuthContent from "../../assets/userAuthContent.png";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
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
              // onChangeCapture={props.onChange && props.onChange}
              size="lg"
              // defaultValue={props.val}
              type={props.type}
              name={props.name}
              placeholder={props.placeholder}
              aria-label={props.placeholder}
            /></>
  )
}
export function UserSignIn() {
  return (
    <div className="mainContainer">
     <CommonPart title="Welcome Back"/>

      <div className=" rightContainer">
        <div className="rightContent">
            <h2>Logo</h2>
            <CustomForm name="emailOrPhone" type="text" placeholder="Email Or Phone" />
           
            <br />
            <CustomForm name="password" type="password" placeholder="Password" />

            
            <button className="loginButton" >Login</button>
            <p >You dont have an account?<Link to="/userRegister">Register Here</Link></p>
          </div>

      </div>
    </div>
  );
}

export function UserRegister() {
  return (
    <div className="mainContainer">
      <CommonPart title="Registration Now"/>
      <div className=" rightContainer">
        <div className="rightContent">
            <h2 style={{marginTop:'0px',marginBottom:'4px'}}>Logo</h2>
            <CustomForm name="name" type="text" placeholder="Name" />
            <CustomForm name="email" type="text" placeholder="Email " />
            <CustomForm name="country" type="text" placeholder="Country" />
            <CustomForm name="mobileNumber" type="text" placeholder="MobileNumber(eg:+91 xxxxxxxx)" />
            <CustomForm name="password" type="password" placeholder="Password" />
            <CustomForm name="confirmPassword" type="password" placeholder="Confirm Password" />

            
            <button style={{marginTop:'1px'}} className="loginButton" >Login</button>
            <p >Already have an account?<Link to="/userLogin">Login Here</Link></p>
          </div>

      </div>
      </div>
    )
}
