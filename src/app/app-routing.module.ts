import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibicaoDeListaDeUsuariosComponent } from './views/exibicao-de-lista-de-usuarios/exibicao-de-lista-de-usuarios.component';

const routes: Routes = [
  { path: '', component: ExibicaoDeListaDeUsuariosComponent },
  { path: 'pages', loadChildren: () => import('./views/pages.module').then(m => m.PagesModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
