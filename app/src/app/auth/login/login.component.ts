import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private entity: any = {};

  constructor(private provider: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  private signIn(entity: any){
    this.provider.login(entity)
    .then(() => this.router.navigateByUrl('/secure'))
    .catch(e => M.toast({ html: e.error }));
  }
}
