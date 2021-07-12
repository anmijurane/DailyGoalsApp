import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { startSaveNote } from '../../actions/notes';

export function NotesAppBar() {
  const { active:note } = useSelector(state => state.notes)
  const dispatch = useDispatch();
  const handleSaveNote = () => {
    dispatch( startSaveNote(note) );
  }
  
  const noteDate = moment(note.date);
  return (
    <header className='notes__appbar'>
      
      <time>{ noteDate.format('dddd, MMMM Do YYYY, h:mm:ss a') }</time>

      <div className="appbar__actions">
        
        <button
          className="button is-secondary py-6"
          onClick={handleSaveNote}
        >
          Save
        </button>

      </div>

    </header>
  )
}
