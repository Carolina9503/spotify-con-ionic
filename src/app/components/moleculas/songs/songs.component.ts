import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  @Input() item;
  @Input() index;

  constructor() { }

  ngOnInit() {
    console.log('______________',this.item[0].track.album.images[0].url);
  }

}
