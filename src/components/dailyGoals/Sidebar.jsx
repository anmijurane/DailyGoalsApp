import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle, FaCalendarPlus } from 'react-icons/fa';
import { DailyEntries } from './DailyEntries';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAsync } from '../../actions/auth';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch( logoutAsync() );
  }

  return (
    <aside className='daily__sidebar'>
      <nav className="daily__sidebar-navbar">

        <div className="daily__sidebar-header">
          <div className="is-flex-center">
            <FaUserCircle />
            <span className='ml-2'>{ name }</span>
          </div>
          <button
            onClick={handleLogout}
          >
            LogOut
            {/* <GiHamburgerMenu /> */}
          </button>
        </div>
      </nav>

      <button className="daily__sidebat-entry box is-flex-center">
        <FaCalendarPlus className='fz-3' />
        <h3 className='mt-3'> New Entry </h3>
      </button>

      <DailyEntries />


    </aside>
  )
}
