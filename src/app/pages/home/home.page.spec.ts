import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HeaderComponent } from '../../components/atomos/header/header.component';
import { GridSongsComponent } from '../../components/template/grid-songs/grid-songs.component';
import { PlayListState } from '../../interfaces/interfaces';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import SpotifyWebApi from 'spotify-web-api-js';
import { SongsComponent } from '../../components/moleculas/songs/songs.component';


describe('HomePage', () => {
  let spotify = new SpotifyWebApi();
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
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    
    TestBed.configureTestingModule({
      declarations: [ HomePage, HeaderComponent, GridSongsComponent, SongsComponent ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({initialState})]
    }).compileComponents(); 

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    store = TestBed.inject<MockStore<PlayListState>>(MockStore<PlayListState>);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
