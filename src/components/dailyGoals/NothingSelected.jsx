import React from 'react';
import { GrScheduleNew } from 'react-icons/gr';

export function NothingSelected() {
  return (
    <div className='nothing__main-content'>
      <p>
        Select something

        <div className="or__option">
          <hr /> <span>Or</span> <hr />
        </div>


        <button className="box is-flex-center is-flex-direc-column">
          <GrScheduleNew className='fz-3' />
          <h3 className='mt-3'> Create New Entry </h3>
        </button>

      </p>
    </div>
  )
}
