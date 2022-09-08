import { createReducer, on } from '@ngrx/store';
import { PlayList, PlayListState } from 'src/app/interfaces/interfaces';
import { loadedPlayList, loadPlayList } from '../actions/playList.actions';

export const initialState: PlayListState = { loading: false, playList: []};


export const playListReducer = createReducer(
  initialState,
  on(loadPlayList, (state) => ({ ...state, loading: true })),
   on(loadedPlayList, (state, {playList}) => ({ ...state, loading: false, playlist:playList }))
);
