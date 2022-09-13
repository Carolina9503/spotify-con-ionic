import { createSelector } from '@ngrx/store';
import { Favorites} from 'src/app/interfaces/interfaces';
import { AppState } from '../app.state';


export const selectFavoritesFeature = (state: AppState) => state.favorites;

export const selectListSongs = createSelector(
    selectFavoritesFeature,
  (state: Favorites[]) => state
);
