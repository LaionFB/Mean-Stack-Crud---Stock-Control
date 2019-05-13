import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecureComponent } from './secure.component';
import { ClothesComponent } from './clothes/clothes.component';

const routes: Routes = [{ 
    path: '',
    component: SecureComponent,
    children: [
      { path: 'clothes', component: ClothesComponent }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
