import { createReducer, on } from '@ngrx/store';
import { FavoritesState} from 'src/app/interfaces/interfaces';
import { addFavorites, deleteFavorites } from '../actions/favorites.actions';

export const initialState: FavoritesState = { favorites: {id:'', img:'', name:'', artist:''}};


export const favoritesReducer = createReducer(
  initialState,
   on(addFavorites, (state, {favorites}) => {
    let tracks = [{...state.favorites}];
    const exist = tracks.findIndex((song) => song.id === favorites.id);

    if (exist === -1) {
      const newTrack = favorites;
      tracks = [{...newTrack}, ...tracks];
    }
    return { ...state, tracks};
   }),
   on(deleteFavorites, (state, {favorites}) => {
    let tracks = [{...state.favorites}];
    tracks = tracks.filter(song => song.id !== favorites.id);
    return {... state, tracks};
   } ),

);
