export interface AddNoteAction {
  type: 'ADD_NOTE';
  payload: {
    text: string;
  }
}

export type Actions =
| AddNoteAction;

export interface DefaultState {
  notes: string[];
}

export interface RootState {
  state: DefaultState;
}