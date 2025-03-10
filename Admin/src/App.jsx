import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Add from './Pages/Add/Add';
import Orders from './Pages/Orders/Orders';
import Lists from './Pages/Lists/Lists';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    const url = "http://localhost:4000"

  return (
    <>
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/lists" element={<Lists url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Fallback route */}
        </Routes>
      </div>
      <ToastContainer /> {/* Add ToastContainer here */}
    </>
  );
};

export default App;