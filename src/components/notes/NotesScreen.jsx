import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export function NotesScreen() {

  const dispatch = useDispatch();
  const { active:note } = useSelector(state => state.notes);
  const { formValues, handleInputChange, reset } = useForm( note );
  const noteId = useRef(note.id);

  useEffect(() => {
    if ( noteId.current !== note.id ) {
      reset( note );
      noteId.current = note.id;
    }
  }, [ note, reset ])

  useEffect(() => {
    dispatch( activeNote( formValues.id, { ...formValues } ) );
  }, [ formValues, dispatch ])

  return (
    <div className='notes__main-content'>
      
      <NotesAppBar />

      <div className='notes_main-main'>

        <div className='notes__form-group'>
          <input
            className='form-control_title'
            name='title'
            placeholder='Enter the title'
            type='text'
            value={formValues.title}
            onChange={ handleInputChange }
          />
          <textarea
            className='form-control_textarea'
            name='body'
            value={formValues.body}
            onChange={ handleInputChange }
          ></textarea>
        </div>

      </div>

    </div>
  )
}
