import { createSelector } from '@ngrx/store';
import { PlayListState } from 'src/app/interfaces/interfaces';
import { AppState } from '../app.state';


export const selectPlayListFeature = (state: AppState) => state.playList;

export const selectListSongs = createSelector(
    selectPlayListFeature,
  (state: PlayListState) => state.playList
);

export const selectLoading = createSelector(
    selectPlayListFeature,
  (state: PlayListState) => state.loading
);

