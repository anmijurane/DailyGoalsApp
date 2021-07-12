import { db } from '../firebase/firebase-config';

export async function getLoadNotes( uid ) {
  const notesAll = await db.collection(`${uid}/dailygoals/notes`).get();
  const notes = [];
  notesAll.forEach( snapChildren => {
    notes.push({
      id: snapChildren.id,
      ...snapChildren.data()
    });
  })
  return notes;
}
