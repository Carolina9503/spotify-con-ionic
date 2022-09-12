import { createReducer, on } from '@ngrx/store';
import { FavoritesState} from 'src/app/interfaces/interfaces';
import { Favorites } from '../../interfaces/interfaces';
import { addFavorites, deleteFavorites } from '../actions/favorites.actions';

export const initialState: FavoritesState = { favorites: {id:'', img:'', name:'', artist:''}};


export const favoritesReducer = createReducer(
  initialState,
   on(addFavorites, (state, {favorites}) => ({ ...state,  favorites })),
   on(deleteFavorites, (state, {favorites}) => ({ ...state,  favorites }))
);
