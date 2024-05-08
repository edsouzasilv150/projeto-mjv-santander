import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioUnicoComponent } from './usuario-unico/usuario-unico.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';

@NgModule({
  declarations: [

  
    UsuarioUnicoComponent,
        CriarUsuarioComponent,
        AtualizarUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class PagesModule { }
