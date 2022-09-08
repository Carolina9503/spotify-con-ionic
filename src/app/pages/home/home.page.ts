import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPlayList } from 'src/app/state/actions/playList.actions';
import { selectLoading } from 'src/app/state/selectors/playList.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store) { }

  ngOnInit() {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadPlayList());
  }

}
