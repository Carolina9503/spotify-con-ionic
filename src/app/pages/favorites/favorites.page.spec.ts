import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { FavoritesPage } from './favorites.page';
import { PlayListState } from '../../interfaces/interfaces';
import { HeaderComponent } from '../../components/atomos/header/header.component';
import { GridSongsComponent } from '../../components/template/grid-songs/grid-songs.component';
import { SongsComponent } from '../../components/moleculas/songs/songs.component';

describe('FavoritesPage', () => {
  const initialState = {
    playList: {
      loading: false,
      playList:{
        image: '',
        namePlayList: '',
        songs: []
      }
    },
    favorites: []
  }

  let store: MockStore<PlayListState>;
  let component: FavoritesPage;
  let fixture: ComponentFixture<FavoritesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesPage, HeaderComponent, GridSongsComponent, SongsComponent ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({initialState})]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesPage);
    component = fixture.componentInstance;
    store = TestBed.inject<MockStore<PlayListState>>(MockStore<PlayListState>);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
