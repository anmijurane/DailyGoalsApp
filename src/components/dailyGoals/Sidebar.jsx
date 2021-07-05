import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle, FaCalendarPlus } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className='daily__sidebar'>
      <navbar className="daily__sidebar-navbar">

        <div className="daily__sidebar-header">
          <div className="is-flex-center">
            <FaUserCircle />
            <span className='ml-2'>Andres Jurado</span>
          </div>
          <button>
            <GiHamburgerMenu />
          </button>
        </div>

        <button className="daily__sidebat-entry box is-flex-center">
          <FaCalendarPlus className='fz-3' />
          <h3 className='mt-3'> New Entry </h3>
        </button>

      </navbar>
    </aside>
  )
}
