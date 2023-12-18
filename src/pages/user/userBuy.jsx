import MobileSvg from "../../assets/MobileBuy.svg";
import ClothesSvg from "../../assets/ClothesBuy.png";
import GrocerySvg from "../../assets/GroceryBuy.svg";
import MedicineSvg from "../../assets/MedicineBuy.svg";
import OtherSvg from "../../assets/OtherBuy.svg";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductSvg from '../../assets/productBuy.svg';
export function UserBuy() {
    const navigate=useNavigate()

    function handleClick(type){
        navigate(`/userBuyList/${type}`)
    }
  return (
    <div style={{ backgroundColor: "#dfe6ee", height: "100vh" }}>
      <p
        style={{ textAlign: "center", fontSize: "1.5rem", paddingTop: "4rem" }}
      >
        Select Item
      </p>
      <Row style={{ padding: "1rem 10rem" }}>
        <Col md={4} sm={6}>
          <img onClick={()=>handleClick('Mobile')} style={{ cursor: "pointer" }} src={MobileSvg} />
          <p style={{ marginLeft: "25%", fontSize: "1rem" }}>Mobile</p>
        </Col>

        <Col md={4} sm={6}>
          <img style={{ cursor: "pointer" }} src={ClothesSvg} />
          <p style={{ marginLeft: "25%", fontSize: "1rem" }}>Clothes</p>
        </Col>

        <Col md={4} sm={6}>
          <img style={{ cursor: "pointer" }} src={GrocerySvg} />
          <p style={{ marginLeft: "25%", fontSize: "1rem" }}>Groceries</p>
        </Col>

        <Col md={4} sm={6}>
          <img style={{ cursor: "pointer" }} src={MedicineSvg} />
          <p style={{ marginLeft: "25%", fontSize: "1rem" }}>Medicine</p>
        </Col>

        <Col md={4} sm={6}>
          <img style={{ cursor: "pointer" }} src={OtherSvg} />
          <p style={{ marginLeft: "25%", fontSize: "1rem" }}>Other</p>
        </Col>
      </Row>
    </div>
  );
}

export function UserBuyList(){
return(
    <div style={{ backgroundColor: "#dfe6ee", height: "100vh" }}>
   <p style={{textAlign:'center',paddingTop:'1rem',fontSize:'1.5rem'}}>Mobile Items</p>
   <Row style={{ backgroundColor: "#dfe6ee",padding: ".5rem 5rem" }}>
   <Col style={{marginBottom:'1rem'}} md={4} sm={6}>
          <img   src={ProductSvg} />
            <Button  onClick={()=>handleClick('Mobile')} style={{backgroundColor:'#2e8a99',marginLeft:'5%',marginTop:'1rem',padding:'10px 4rem'}}>Buy</Button>
        </Col>
        <Col md={4} sm={6}>
          <img   src={ProductSvg} />
            <Button  onClick={()=>handleClick('Mobile')} style={{backgroundColor:'#2e8a99',marginLeft:'10%',marginTop:'1rem',padding:'10px 4rem'}}>Buy</Button>
        </Col>
        <Col md={4} sm={6}>
          <img   src={ProductSvg} />
            <Button  onClick={()=>handleClick('Mobile')} style={{backgroundColor:'#2e8a99',marginLeft:'10%',marginTop:'1rem',padding:'10px 4rem'}}>Buy</Button>
        </Col>
        <Col md={4} sm={6}>
          <img   src={ProductSvg} />
            <Button  onClick={()=>handleClick('Mobile')} style={{backgroundColor:'#2e8a99',marginLeft:'10%',marginTop:'1rem',padding:'10px 4rem'}}>Buy</Button>
        </Col>
        <Col md={4} sm={6}>
          <img   src={ProductSvg} />
            <Button  onClick={()=>handleClick('Mobile')} style={{backgroundColor:'#2e8a99',marginLeft:'10%',marginTop:'1rem',padding:'10px 4rem'}}>Buy</Button>
        </Col>
        <Col md={4} sm={6}>
          <img   src={ProductSvg} />
            <Button  onClick={()=>handleClick('Mobile')} style={{backgroundColor:'#2e8a99',marginLeft:'10%',marginTop:'1rem',padding:'10px 4rem'}}>Buy</Button>
        </Col>
        

        
      </Row>
        </div>
)
}