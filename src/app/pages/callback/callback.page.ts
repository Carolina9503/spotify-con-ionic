import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoadingController } from '@ionic/angular';
import { getToken } from '../../../assets/storage';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private loadingCtrl: LoadingController) { }

  ngOnInit() {  
    this.showLoading();  
    this.loginService.getToken();
    if (getToken()) {
      this.router.navigate(['/home']);
    }
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 500,
      cssClass: 'custom-loading',
    });

    loading.present();
  }
     
      
}
