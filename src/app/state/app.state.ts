import { ActionReducerMap } from '@ngrx/store';
import { FavoritesState, PlayListState } from '../interfaces/interfaces';
import { favoritesReducer } from './reducers/favorites.reducers';
import { playListReducer } from './reducers/playList.reducers';


export interface AppState {
  playList: PlayListState;
  favorites: FavoritesState;
//   favoritos: ReadonlyArray<string>;
//   user: ReadonlyArray<string>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    playList: playListReducer,
    favorites: favoritesReducer
};
