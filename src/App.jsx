import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { ReceiverModel, SenderModel} from './components/model'
import {  SenderCard, TransferReceiveCard, TransferSendCard} from './components/card'
import { MobileSideBar, SideBar } from './components/sidebar';
import Transfer from './pages/transfer';
import { UserLayout } from './pages/userLayout';
function App() {

  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<ReceiverModel />} /> */}
      <Route path="/transfer" element={<UserLayout><Transfer /></UserLayout>} />
    </Routes>
  </Router>  )
}

export default App
