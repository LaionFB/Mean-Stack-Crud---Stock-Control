import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecureGuardService } from './secure/secure-guard.service';

const routes: Routes = [
  { path: 'auth', loadChildren: 'src/app/auth/auth.module#AuthModule' },
  { path: 'secure', loadChildren: 'src/app/secure/secure.module#SecureModule', canLoad: [SecureGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
