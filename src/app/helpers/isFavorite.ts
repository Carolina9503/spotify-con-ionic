// import { addFavorites, setIsFavorite } from "../state/actions/favorites.actions";


// export const isFavorite = (dataSong, favorite) => {
//   return async (dispatch) => {
//     if (favorite === undefined || favorite === false) {
//       dispatch(setIsFavorite({ id: dataSong.id, isfavorite: true }));
//       const dataFavorites = {
//         id: dataSong.id,
//         img: dataSong.album.images[0].url,
//         name: dataSong.name,
//         artist: dataSong.artists.map((artist) => artist.name).join(","),
//       };
//       dispatch(addFavorites(dataFavorites));
//     } else {
//       dispatch(SET_ISFAVORITE({ id: dataSong.id, isfavorite: !favorite }));
//       dispatch(DELETE_FAVORITE({ id: dataSong.id }));
//     }
//   };
// };
