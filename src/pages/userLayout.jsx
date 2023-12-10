import { Col } from "react-bootstrap";
import { HomeHeader } from "../components/homeheader";
import { MobileSideBar, SideBar } from "../components/sidebar";


export function UserLayout(props){
return(
    <>
    <div className="d-flex">
        <Col md={3} style={{backgroundColor:"rgb(247,249,251)"}}>
        <SideBar />
        <MobileSideBar />
    </Col>
    <Col md={9}>
        <HomeHeader />
        {props.children}
    </Col>
    </div>
    </>
)
}
