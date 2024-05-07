import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-exibicao-de-lista-de-usuarios',
  templateUrl: './exibicao-de-lista-de-usuarios.component.html',
  styleUrls: ['./exibicao-de-lista-de-usuarios.component.scss'],
})
export class ExibicaoDeListaDeUsuariosComponent {
  usuarios: IUser[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.obterTodosUsuarios();
  }

  obterTodosUsuarios() {
    this.usuarioService.getUsers()
      .subscribe(usuarios => this.usuarios = usuarios)
  }
}
