import { ActionReducerMap } from '@ngrx/store';
import { PlayListState } from '../interfaces/interfaces';
import { playListReducer } from './reducers/playList.reducers';


export interface AppState {
  playList: PlayListState;
//   favoritos: ReadonlyArray<string>;
//   user: ReadonlyArray<string>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    playList: playListReducer
};
