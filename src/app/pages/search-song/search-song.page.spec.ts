import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchSongPage } from './search-song.page';
import { PlayListState } from '../../interfaces/interfaces';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchSongPage', () => {
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
  let component: SearchSongPage;
  let fixture: ComponentFixture<SearchSongPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSongPage ],
      imports: [IonicModule.forRoot(), PipesModule, RouterTestingModule],
      providers: [provideMockStore({initialState})]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchSongPage);
    component = fixture.componentInstance;
    store = TestBed.inject<MockStore<PlayListState>>(MockStore<PlayListState>);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
