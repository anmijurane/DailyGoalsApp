import React from 'react'
import { useSelector } from 'react-redux';
import { DailyEntry } from './DailyEntry';

export function DailyEntries() {

  const { notes:entries } = useSelector(state => state.notes);

  return (
    <div className='daily__entries'>
      {entries.map((entry) => (
        <DailyEntry
          key={ entry.id }
          { ...entry }
        />
      ))}
    </div>
  )
}
