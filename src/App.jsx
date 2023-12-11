import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import {Transfer} from './pages/user/transfer';
import { UserLayout } from './pages/user/userLayout';
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
