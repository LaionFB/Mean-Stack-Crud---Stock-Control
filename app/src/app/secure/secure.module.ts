import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ClothesService } from './providers/clothes.service';

@NgModule({
  declarations: [
    SecureComponent,
    ClothesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SecureRoutingModule
  ],
  providers: [ClothesService]
})
export class SecureModule { }
