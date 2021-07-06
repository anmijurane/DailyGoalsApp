import React from 'react'
import { DailyEntry } from './DailyEntry';

export function DailyEntries() {

  const entries = [ 1,2,3,4 ];

  return (
    <div className='daily__entries'>
      {entries.map((entry) => (
        <DailyEntry key={ entry } />
      ))}
    </div>
  )
}
