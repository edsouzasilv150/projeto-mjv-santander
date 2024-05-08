import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuarioUnicoComponent } from './usuario-unico/usuario-unico.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [UsuarioUnicoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
  ],
})
export class PagesModule { }
