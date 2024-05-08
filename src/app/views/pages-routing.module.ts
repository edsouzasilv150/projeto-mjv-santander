import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioUnicoComponent } from './usuario-unico/usuario-unico.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';

const routes: Routes = [
  { path: 'usuario-unico/:id', component: UsuarioUnicoComponent },
  { path: 'criar-usuario', component: CriarUsuarioComponent },
  { path: 'atualizar-usuario/:id', component: AtualizarUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
