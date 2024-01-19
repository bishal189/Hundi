import { Col } from "react-bootstrap";
import { HomeHeader } from "../../components/user/homeheader";
import { MobileSideBar, SideBar } from "../../components/user/sidebar";

import { useEffect } from "react";
export function AdminLayout(props) {

  return (
    <>
      <div className="d-flex">
        <Col md={3} style={{ backgroundColor: "#ededed" }}>
          <SideBar />
          <MobileSideBar />
        </Col>
        <Col xs={12} md={9} sm={12}>
          <HomeHeader />
          {props.children}
        </Col>
      </div>
    </>
  );
}
