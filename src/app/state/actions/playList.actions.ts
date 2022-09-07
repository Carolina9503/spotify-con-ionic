import { createAction, props } from '@ngrx/store';
import { PlayList } from 'src/app/interfaces/interfaces';

export const loadPlayList = createAction(
  '[play list] Load playList',
);

export const loadedPlayList = createAction(
    '[play list] Loaded success',
    props<{ playList: PlayList[] }>()
  );

