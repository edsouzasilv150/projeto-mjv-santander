import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './views/pages.module';
import { ExibicaoDeListaDeUsuariosComponent } from './views/exibicao-de-lista-de-usuarios/exibicao-de-lista-de-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ExibicaoDeListaDeUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
