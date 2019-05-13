import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
declare var $ : any;


@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  private sidenavRef: any;

  constructor(private router: Router){
  }

  ngOnInit() {
    let sidenavElem = $('.sidenav').sidenav();
    this.sidenavRef = M.Sidenav.getInstance(sidenavElem);

    this.router.navigateByUrl('/auth/login');
  }

  toggleMenu(){
    this.sidenavRef.isOpen ? this.sidenavRef.close() : this.sidenavRef.open();
  }
}
