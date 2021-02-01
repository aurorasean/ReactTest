import { stat } from 'fs';
import * as Types from './types';

export const initialState: Types.RootState = {
  state: {
    notes: [],
  },
};

const reducer = (
  state: Types.RootState = initialState,
  action: Types.Actions
) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      state.state.notes.push(action.payload.text);

      console.log({ state });
      const newState = {
        state: {
          notes: [...state.state.notes, action.payload.text],
        },
      };
      console.log({
        magic: {
          ...state.state,
          notes: [...state.state.notes, action.payload.text],
        },
      });
      return {
        ...state.state,
        state: {
          notes: [...state.state.notes, action.payload.text],
        }
      };
    }
  }
};

export default reducer;
