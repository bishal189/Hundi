import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { LandingPage } from "./pages/user/landing";
import { UserPay } from "./pages/user/pay";
import { Transfer } from "./pages/user/transfer";
import { UserRegister, UserSignIn } from "./pages/user/userAuth";
import { UserBuy, UserBuyDetail, UserBuyList } from "./pages/user/userBuy";
import { UserDashboard } from "./pages/user/userDashboard.jsx";
import { UserHistory } from "./pages/user/userHistory";
import { UserLayout } from "./pages/user/userLayout";
import { UserPayModel } from "./pages/user/userpaymodel";
import { UserProfile } from "./pages/user/userProfile";
import { UserRequest } from "./pages/user/userRequest";
import { UserWallet } from "./pages/user/userWallet";
import {
  UserSend,
  UserTopUp,
  UserWithdraw,
} from "./pages/user/userWalletInner";

import { PayManagement } from "./pages/admin/payManagement";
import { AdminLayout } from "./pages/admin/adminLayout";
import { BuyManagement } from "./pages/admin/BuyManagement.jsx";
import TransferManagement from "./pages/admin/TransferManagement.jsx";
import { HistoryMangement } from "./pages/admin/HistoryManagement.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/user/transfer"
          element={
            <UserLayout>
              <Transfer />
            </UserLayout>
          }
        />

        <Route
          path="/user/pay"
          element={
            <UserLayout>
              <UserPay />
            </UserLayout>
          }
        />
        <Route
          path="/user/pay/:company"
          element={
            <UserLayout>
              <UserPayModel />
            </UserLayout>
          }
        />
        <Route path="/userLogin" element={<UserSignIn />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route
          path="/user/userHistory"
          element={
            <UserLayout>
              <UserHistory />
            </UserLayout>
          }
        />
        <Route
          path="/user/dashboard"
          element={
            <UserLayout>
              <UserDashboard />
            </UserLayout>
          }
        />
        <Route path="/user/userProfile" element={<UserProfile />} />
        <Route
          path="/user/userWallet"
          element={
            <UserLayout>
              <UserWallet />
            </UserLayout>
          }
        />
        <Route
          path="/user/userSend"
          element={
            <UserLayout>
              <UserSend />
            </UserLayout>
          }
        />
        <Route
          path="/user/userWithdraw"
          element={
            <UserLayout>
              <UserWithdraw />
            </UserLayout>
          }
        />
        <Route
          path="/user/userTopUp"
          element={
            <UserLayout>
              <UserTopUp />
            </UserLayout>
          }
        />
        <Route
          path="/user/userRequest"
          element={
            <UserLayout>
              <UserRequest />
            </UserLayout>
          }
        />
        <Route
          path="/user/userBuy"
          element={
            <UserLayout>
              <UserBuy />
            </UserLayout>
          }
        />
        <Route
          path="/user/userBuyList/:type"
          element={
            <UserLayout>
              <UserBuyList />
            </UserLayout>
          }
        />
        <Route
          path="/user/userBuyDetail/:type/:id"
          element={
            <UserLayout>
              <UserBuyDetail />
            </UserLayout>
          }
        />

        <Route
          path="/admin/payManagement"
          element={
            <AdminLayout>
              <PayManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/buyManagement"
          element={
            <AdminLayout>
              <BuyManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/transferManagement"
          element={
            <AdminLayout>
              <TransferManagement />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/HistoryManagement"
          element={
            <AdminLayout>
              <HistoryMangement />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
