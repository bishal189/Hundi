import { Col } from "react-bootstrap";
import { HomeHeader } from "../../components/user/homeheader";
import { AdminMobileSideBar, AdminSideBar } from "../../components/admin/adminSidebar";

import { useEffect } from "react";
export function AdminLayout(props) {

  return (
    <>
      <div className="d-flex">
        <Col md={3} style={{ backgroundColor: "#53449f" }}>
          <AdminSideBar />
          <AdminMobileSideBar />
        </Col>
        <Col xs={12} md={9} sm={12}>
          <HomeHeader />
          {props.children}
        </Col>
      </div>
    </>
  );
}
