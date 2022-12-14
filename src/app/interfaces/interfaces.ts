export interface Tab {
    icon: string;
    name: string;
    tab: string;
}
export interface PlayList {
    image: string;
    namePlayList: string;
    songs: any[];
}

export interface PlayListState {
    loading: boolean;
    playList: PlayList;
}
// export interface FavoritesState {
//     favorites: Favorites[];
// }
export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
}
export interface Favorites {
    id: string;
    img: string;
    name: string;
    artist: string;
}
