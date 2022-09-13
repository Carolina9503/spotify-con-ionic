import { createAction, props } from '@ngrx/store';
import { Favorites } from 'src/app/interfaces/interfaces';


export const addFavorites = createAction(
    '[favorites] Add success',
    props<{ song: Favorites}>()
  );

  export const deleteFavorites = createAction(
    '[favorites] Delete success',
    props<{ favorites: Favorites}>()
  );

  export const setIsFavorite = createAction(
    '[favorites] Is Favorite',
    props<{ favorites: Favorites}>()
  );
