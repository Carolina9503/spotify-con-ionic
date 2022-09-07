export interface Tab {
    icon: string;
    name: string;
    tab: string;
}
export interface PlayList {
    image: string;
    namePlayList: string;
    songs: [];
}

export interface PlayListState {
    loading: boolean;
    playList: ReadonlyArray<PlayList>;
}
