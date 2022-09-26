import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { SongsComponent } from './songs.component';
import { PlayListState } from '../../../interfaces/interfaces';

describe('SongsComponent', () => {
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
  let component: SongsComponent;
  let fixture: ComponentFixture<SongsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsComponent ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({initialState})]
    }).compileComponents();

    fixture = TestBed.createComponent(SongsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<MockStore<PlayListState>>(MockStore<PlayListState>);
    fixture.detectChanges();
    
  }));
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
