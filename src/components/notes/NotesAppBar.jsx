import React from 'react'

export function NotesAppBar() {
  return (
    <header className='notes__appbar'>
      
      <time>{new Date().toString()}</time>

      <div className="appbar__actions">
        
        <button className="button is-secondary py-6">
          Save
        </button>

      </div>

    </header>
  )
}
