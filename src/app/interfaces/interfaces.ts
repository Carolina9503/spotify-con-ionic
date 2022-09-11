export interface Tab {
    icon: string;
    name: string;
    tab: string;
}
export interface PlayList {
    image: string;
    namePlayList: string;
    songs: any;
}

export interface PlayListState {
    loading: boolean;
    playList: PlayList;
}
export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
}
