import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuarioUnicoComponent } from './usuario-unico/usuario-unico.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxFileDropModule } from 'ngx-file-drop';
import {MatIconModule} from '@angular/material/icon';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';


export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    UsuarioUnicoComponent,
    CriarUsuarioComponent,
    AtualizarUsuarioComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    MatIconModule
  ],
  exports: [
  ],
})
export class PagesModule { }
