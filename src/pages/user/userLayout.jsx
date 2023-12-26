import { Col } from "react-bootstrap";
import { HomeHeader } from "../../components/user/homeheader";
import { MobileSideBar, SideBar } from "../../components/user/sidebar";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { useEffect } from "react";
export function UserLayout(props) {
  const navigate = useNavigate();
  useEffect(() => {
    async function verify() {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        navigate("/userLogin");
      }
      const decodedToken = jwtDecode(accessToken);
      // If decoding is successful, check the expiration date
      if (decodedToken && decodedToken.exp) {
        const expirationDate = new Date(decodedToken.exp * 1000); // Convert seconds to milliseconds

        // Compare with the current date
        if (expirationDate > new Date()) {
          return;
        } else {
          navigate("/userLogin");
          return;
        }
      } else {
        navigate("/userLogin");
        return;
      }
    }
    verify();
  }, []);
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
