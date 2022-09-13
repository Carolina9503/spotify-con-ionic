import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setToken } from 'src/assets/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    console.log('kdsdaqui aqui ')
    localStorage.removeItem('TOKEN');
    this.router.navigate(['/login'])
    
  }

}
