import { Col } from "react-bootstrap";
import { HomeHeader } from "../../components/user/homeheader";
import { MobileSideBar, SideBar } from "../../components/user/sidebar";
import TransferManagement from "../../components/admin/TransferManagement";
import ListHeader from "../../components/admin/ListHeader";
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
          <div
            style={{
              padding: "40px 20px 20px 20px",
              background: "#E7E7F7",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "20px",
              }}
            >
              <h4>Transfer</h4>
              <h4>Add new bank</h4>
              <h4>Change currency rate</h4>
            </div>
            {
              <>
                <ListHeader
                  headerItems={[
                    "Sender name",
                    "Sender id",
                    "Reciver name",
                    "Reciver id",
                    "Amount",
                    "Sender agent",
                    "Reciver agent",
                    "Status",
                    "Action",
                  ]}
                />
                <TransferManagement />
                <TransferManagement count={1} />
                <TransferManagement count={2} />
                <TransferManagement count={3} />
                <TransferManagement count={4} />
                <TransferManagement count={1} />
                <TransferManagement count={2} />
                <TransferManagement count={3} />
                <TransferManagement count={4} />
                <TransferManagement count={1} />
                <TransferManagement count={2} />
                <TransferManagement count={3} />
                <TransferManagement count={4} />
                <TransferManagement count={1} />
                <TransferManagement count={2} />
                <TransferManagement count={3} />
                <TransferManagement count={4} />
              </>
            }
          </div>
        </Col>
      </div>
    </>
  );
}
