import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url: string;
  constructor(private loginService: LoginService, ) { }

  ngOnInit() {
    this.url = this.loginService.getUrl();
    const hash = this.loginService.getToken();
    console.log(':_____',hash);
  }
}
