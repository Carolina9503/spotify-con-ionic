import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  token = {};
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    const hash = this.loginService.getToken();
    console.log(hash);
  }

}
