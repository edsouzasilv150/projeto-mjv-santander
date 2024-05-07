import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './views/pages.module';
import { ExibicaoDeListaDeUsuariosComponent } from './views/exibicao-de-lista-de-usuarios/exibicao-de-lista-de-usuarios.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
