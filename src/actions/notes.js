import { db } from "../firebase/firebase-config";
import { getLoadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const docRef = await db.collection(`${ uid }/dailygoals/notes`).add( newNote );

    dispatch( activeNote(docRef.id, newNote) );
  }
}

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  }
})

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await getLoadNotes(uid);
    dispatch( setNotes( notes ) );
  }
}

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
})

export const startSaveNote = ( note ) => {
  return async ( dispatch, getState ) => {
    const { uid } = getState().auth;

    if( !note.url ) {
      delete note.url;
    }

    const noteToDB = { ...note };
    delete noteToDB.id;

    await db.doc(`${ uid }/dailygoals/notes/${note.id}`)
      .update( noteToDB );
    dispatch( refreshNotes(note.id, note) )
  }
}

export const refreshNotes = ( id, note ) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }

})
