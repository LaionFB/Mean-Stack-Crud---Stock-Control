import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecureGuardService } from './secure/secure-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private guard: SecureGuardService, private router: Router){}

  ngOnInit() {
    this.guard.canLoad(null)
    .then(logged => this.router.navigateByUrl(logged ? '/secure' : '/auth'))
  }
}
