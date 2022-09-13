import { createReducer, on } from '@ngrx/store';
import { Favorites} from 'src/app/interfaces/interfaces';
import { Favotire } from 'src/app/models/favorite.model';
import { addFavorites, deleteFavorites } from '../actions/favorites.actions';

export const initialState: Favorites[] = [];


export const favoritesReducer = createReducer(
  initialState,
   on(addFavorites, (state, {song}) => [...state, new Favotire({...song})] ),
  //  on(deleteFavorites, (state, {favorites}) => {
  //    let tracks = {...state};
  //   tracks = tracks.filter(song => song.id !== favorites.id);
  //   return {... state, tracks};
  //  } ),

);
