import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
declare var $ : any;

@Component({
  selector: 'secure-root',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit{
  private username: string = '';
  private sidenavRef: any;

  constructor(private router: Router){
  }

  ngOnInit() {
    let sidenavElem = $('.sidenav').sidenav();
    this.sidenavRef = M.Sidenav.getInstance(sidenavElem);

    this.router.navigateByUrl('/secure/clothes');

    this.username = localStorage.getItem('username');
  }

  toggleMenu(){
    this.sidenavRef.isOpen ? this.sidenavRef.close() : this.sidenavRef.open();
  }

  signOut(){
    localStorage.setItem('jwt', null);
    this.router.navigateByUrl('/auth/login');
  }
}
