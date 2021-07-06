import React from 'react'
import { NotesScreen } from '../notes/NotesScreen'
import { NothingSelected } from './NothingSelected'
import Sidebar from './Sidebar'

export function DailyGoalsScreen() {

  return (
    <div className='daily__main-content'>
      <Sidebar />
      


      <main>
        
        
        {/* <NothingSelected /> */}
        <NotesScreen />


      </main>

    </div>
  )
}
