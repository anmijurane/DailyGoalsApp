import React from 'react'

export function DailyEntry() {
  return (
    <div className='daily__entry is-clickable'>
      <div
        className="daily__entry-picture"
        style={ { 
          backgroundSize: 'cover',
          backgroundImage: 'url("https://img.ecologiahoy.com/2017/06/paisajes-naturales-26-1024x640.jpeg")' 
          } }
      ></div>

      <div className="daily__entry-body">
        <p className="daily__entry-title">
          Title
        </p>
        <p className="daily__entry-content">
          Do reprehenderit eu duis ex anim. Proident sunt veniam excepteur duis irure anim ad veniam.
        </p>
      </div>

      <div className="daily__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>

    </div>
  )
}
