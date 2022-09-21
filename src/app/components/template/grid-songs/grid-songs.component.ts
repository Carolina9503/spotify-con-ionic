import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-songs',
  templateUrl: './grid-songs.component.html',
  styleUrls: ['./grid-songs.component.scss'],
})
export class GridSongsComponent implements OnInit {
   @Input() songs
   @Input() isHome
  constructor() { }

  ngOnInit() {}

}
