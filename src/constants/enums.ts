export enum ActionType {
  ADD_NOTE = 'ADD_NOTE',
  SWAP_NOTE = 'SWAP_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
  PRUNE_NOTES = 'PRUNE_NOTES',

  // Sagas
  LOAD_NOTES = 'LOAD_NOTES',
  LOAD_NOTES_SUCCESS = 'LOAD_NOTES_SUCCESS',
  LOAD_NOTES_ERROR = 'LOAD_NOTES_ERROR',

  SYNC_STATE = 'SYNC_STATE',
  SYNC_STATE_SUCCESS = 'SYNC_STATE_SUCCESS',
  SYNC_STATE_ERROR = 'SYNC_STATE_ERROR',
}
