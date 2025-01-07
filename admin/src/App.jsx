import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './components/Pages/Add/Add'
import Lists from './components/Pages/Lists/Lists'
import Orders from './components/Pages/Orders/Order'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <h3>Admin Panel</h3>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url} />}/>
          <Route path='/list' element={<Lists url={url} />}/>
          <Route path='/orders' element={<Orders url={url} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
