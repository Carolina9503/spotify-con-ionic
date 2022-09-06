import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tab } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  options: Observable<Tab[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.options = this.dataService.getOptsTabsBottom();
  }

}
