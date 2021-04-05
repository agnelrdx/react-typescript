import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import img from '../assets/logo.png'

const Sidebar: React.FC = () => {
  return (
    <div
      className="d-flex flex-column p-3 text-white bg-dark"
      style={{ width: '280px' }}>
      <Link
        to="/dashboard/home"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none dashboard-logo">
        <img src={img} alt="Logo" width="30" height="30" />
        <span className="fs-4">Dashboard</span>
      </Link>

      <ul className="nav nav-pills mt-3 flex-column mb-auto">
        <li className="nav-item">
          <Link
            className={`nav-link ${
              useRouteMatch('/dashboard/home') ? 'active' : ''
            }`}
            to="/dashboard/home">
            Add ToDo
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${
              useRouteMatch('/dashboard/completed-list') ? 'active' : ''
            }`}
            to="/dashboard/completed-list">
            Completed List
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
