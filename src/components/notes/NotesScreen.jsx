import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export function NotesScreen() {
  return (
    <div className='notes__main-content'>
      
      <NotesAppBar />

      <div className="notes_main-main">

        <div className="notes__form-group">
          <input type="text" className="form-control_title" placeholder='Enter the title' />
          <textarea name="" className="form-control_textarea"></textarea>
        </div>

      </div>

    </div>
  )
}
