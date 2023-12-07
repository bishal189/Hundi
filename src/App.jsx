import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import {PayModel, ReceiverModel, SenderModel} from './components/model'
import { ReciverCard, SenderCard, TransferReceiveCard, TransferSendCard} from './components/card'
import { MobileSideBar, SideBar } from './components/sidebar';
function App() {

  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<ReceiverModel />} /> */}
      <Route path="/transfer" element={<><SideBar /> <MobileSideBar /></>} />
    </Routes>
  </Router>  )
}

export default App
