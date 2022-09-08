import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { Tab } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  spotify = new SpotifyWebApi();

  constructor(private http: HttpClient) { }

  getOptsTabsBottom() {
    return this.http.get<Tab[]>('/assets/data/tabs-bottom-opts.json');
  }

}
