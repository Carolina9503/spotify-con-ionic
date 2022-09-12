import { createSelector } from '@ngrx/store';
import { FavoritesState, PlayListState } from 'src/app/interfaces/interfaces';
import { AppState } from '../app.state';


export const selectFavoritesFeature = (state: AppState) => state.favorites;

export const selectListSongs = createSelector(
    selectFavoritesFeature,
  (state: FavoritesState) => state.favorites
);
