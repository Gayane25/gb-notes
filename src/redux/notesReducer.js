export const GET_NOTES = "GET_NOTES";
export const DELETE_NOTES = "DELETE_NOTES";

export function notesReducer(state = [], action) {
  switch (action.type) {
    case GET_NOTES: {
      let index = state.findIndex((el) => el.id === action.payload.id);
      if (index === -1) return [...state, action.payload];

      return [...state];
    }

    case DELETE_NOTES: {
      const newState = state.filter((el, index) => el.id !== action.payload.id);
      return newState;
    }

    default: {
      return state;
    }
  }
}

export const putNotesInState = (payload) => ({ type: GET_NOTES, payload });
