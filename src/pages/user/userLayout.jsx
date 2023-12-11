import { Col } from "react-bootstrap";
import { HomeHeader } from "../../components/user/homeheader";
import { MobileSideBar, SideBar } from "../../components/user/sidebar";


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
