import { types } from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
}
// TODO: Implementar de donde viene el error!
export const uiReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      }
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      }
    case types.uiStartLoadng:
      return {
        ...state,
        loading: true,
      }
    case types.uiFinishLoadng: 
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }

}
