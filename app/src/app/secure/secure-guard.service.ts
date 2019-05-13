import { Injectable } from '@angular/core';
import { Router, Route, CanLoad } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecureGuardService implements CanLoad {
  constructor(private provider: AuthService, private router: Router) { }

  async canLoad(route: Route): Promise<boolean> {
    try{
      await this.provider.checkSession();      
      return true;
    }catch(e){
      localStorage.setItem('jwt', null);
      return false;
    }
  }  
}
