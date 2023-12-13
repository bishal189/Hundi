import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { UserPay } from './pages/user/pay';
import {Transfer} from './pages/user/transfer';
import { UserRegister, UserSignIn } from './pages/user/userAuth';
import { UserLayout } from './pages/user/userLayout';
import { UserPayModel } from './pages/user/userpaymodel';
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
    </Routes>
  </Router>  )
}

export default App
