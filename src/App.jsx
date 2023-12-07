import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import {PayModel, ReceiverModel, SenderModel} from './components/model'
import { ReciverCard, SenderCard, TransferReceiveCard, TransferSendCard} from './components/card'
import { SideBar } from './components/sidebar';
function App() {

  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<ReceiverModel />} /> */}
      <Route path="/transfer" element={<SideBar />} />
    </Routes>
  </Router>  )
}

export default App
