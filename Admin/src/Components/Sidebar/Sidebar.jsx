import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to="/add" className="sidebar-option">
                <img src={assets.add_icon} alt="Add Item" />
                <p>Add Item</p>
            </NavLink>
            <NavLink to="/lists" className="sidebar-option">
                <img src={assets.order_icon} alt="List Item" />
                <p>List Item</p>
            </NavLink>
            <NavLink to="/ordres" className="sidebar-option">
                <img src={assets.order_icon} alt="Orders" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
