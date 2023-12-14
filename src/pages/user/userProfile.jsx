
import {Col,Button, Row} from 'react-bootstrap'
import { CustomForm } from '../../components/user/formInput'
function Form(props){
    return(
            <Col style={{marginBottom:'1.5rem'}} md={4}>
                    <p style={{padding:'0',margin:'0',color:'#000000'}}>{props.title}</p>
                    <CustomForm name={props.title} readonly={props.readonly} val={props.title} placeholder={props.title}/>
            </Col>
    )
}

export function UserProfile(){
    return(
        <div style={{backgroundColor:"#dfe6ee",height:'100vh'}}>
                <div style={{paddingTop:'1rem',paddingLeft:'2rem'}}>
                    <h4>Basic Info</h4>
                </div>
                <Row style={{width:'80%',margin:'20px  auto 0px '}}>
                    <Form title="FirstName"/>
                    <Form title="lastName"/>
                    <Form readonly={true}title="Country"/>
                    <Form readonly={true}title="Phone"/>
                    <Form readonly={true} title="UserId"/>
                    <Form readonly={true} title="Email"/>
                    <Form title="Gender"/>
                    <Form title="Date Of Birth"/>
                    <Form title="City"/>
                    <Form title="Zip Code"/>
                    <Form title="Address"/>                    
                    <Form readonly={true} title="Joining Date"/>
                </Row>
                <div style={{paddingLeft:'2rem',paddingTop:'2rem'}}>
                   <h5>Change Password</h5> 
                   <Row style={{width:'70%',margin:'30px  auto 0px '}}>

                   <Form title="New Password"/>
                   <Form title="Confirm Password"/>
                </Row>
                </div>
                <div style={{padding:'10px 40px',textAlign:'center'}}>
                <Button style={{backgroundColor:"#2e8a99"}}>Save Changes</Button>

                </div>
        </div>
    )
}