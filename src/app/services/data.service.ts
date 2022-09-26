import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente, Tab } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOptsTabsBottom() {
    return this.http.get<Tab[]>('/assets/data/tabs-bottom-opts.json');
  }
  getOptsTabsTop() {
    return this.http.get<Tab[]>('/assets/data/tabs-top-opts.json');
  }
  getMenuOpt(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

}
