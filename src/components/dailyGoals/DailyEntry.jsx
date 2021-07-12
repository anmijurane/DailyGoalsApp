import React from 'react'
import moment from 'moment'
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

export function DailyEntry({ id, title, body, date, url }) {
  
  const dispatch = useDispatch();
  const noteDate = moment( date );

  const handleEntryView = () => {
    dispatch( activeNote( id, { title, body, date, url } ) )
  }

  return (
    <div
      className='daily__entry is-clickable'
      onClick={ handleEntryView }
    >
      {url && 
        (<div
          className="daily__entry-picture"
          style={ { 
            backgroundSize: 'cover',
            backgroundImage: 'url("https://img.ecologiahoy.com/2017/06/paisajes-naturales-26-1024x640.jpeg")' 
          } }
        ></div>)}

      <div className="daily__entry-body">
        <p className="daily__entry-title">
          { title }
        </p>
        <p className="daily__entry-content">
          { body }
        </p>
      </div>

      <div className="daily__entry-date-box">
        <span> { noteDate.format('MMM') } </span>
        <h4> { noteDate.format('D') } </h4>
      </div>

    </div>
  )
}
