import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { UserPay } from './pages/user/pay';
import {Transfer} from './pages/user/transfer';
import { UserRegister, UserSignIn } from './pages/user/userAuth';
import { UserDashboard } from './pages/user/userDashboard.jsx';
import { UserHistory } from './pages/user/userHistory';
import { UserLayout } from './pages/user/userLayout';
import { UserPayModel } from './pages/user/userpaymodel';
import { UserProfile } from './pages/user/userProfile';
import { UserWallet } from './pages/user/userWallet';
import { UserSend } from './pages/user/userWalletInner';
function App() {

  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<ReceiverModel />} /> */}
      <Route path="/transfer" element={<UserLayout><Transfer /></UserLayout>} />

      <Route path="/pay" element={<UserLayout><UserPay /></UserLayout>} />
      <Route path="/pay/:company" element={<UserLayout><UserPayModel /></UserLayout>} />

      <Route path="/userLogin" element={<UserSignIn />} />
      <Route  path="/userRegister" element={<UserRegister />} />
      <Route path="/userHistory" element={<UserLayout><UserHistory /></UserLayout>} />
      <Route path="/dashboard" element={<UserLayout><UserDashboard /></UserLayout>} />
      <Route path="/userProfile" element={<UserProfile />} />
      <Route path ="/userWallet" element={<UserLayout><UserWallet /></UserLayout>} />
      <Route path="/userSend" element={<UserLayout><UserSend /></UserLayout>} />
    </Routes>
  </Router>  )
}

export default App
