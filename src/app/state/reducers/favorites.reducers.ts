import { createReducer, on } from '@ngrx/store';
import { FavoritesState} from 'src/app/interfaces/interfaces';
import { addFavorites, deleteFavorites } from '../actions/favorites.actions';
import { AppState } from '../app.state';

export const initialState: FavoritesState = { favorites: []};


export const favoritesReducer = createReducer(
  initialState,
   on(addFavorites, (state, {favorites}) => ({ ...state,  favorites })),
  //  on(deleteFavorites, (state, parametro) => ((state.favorites.filter(song => song.id !== favorites.id)) ) ),

);
