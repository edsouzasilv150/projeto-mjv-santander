import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-exibicao-de-lista-de-usuarios',
  templateUrl: './exibicao-de-lista-de-usuarios.component.html',
  styleUrls: ['./exibicao-de-lista-de-usuarios.component.scss'],
})
export class ExibicaoDeListaDeUsuariosComponent implements OnInit {
  usuarios: IUser[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obterTodosUsuarios();
  }

  obterTodosUsuarios() {
    this.usuarioService.getUsers()
      .subscribe(usuarios => this.usuarios = usuarios)
  }

  deletarUsuario(userId: string) {
    this.usuarioService.deleteUser(userId)
      .subscribe((usuario) => {
        localStorage.clear();
        this.obterTodosUsuarios();
        console.log('Usuário excluído com sucesso: ', usuario)

      }, (error) => {
        console.log('Erro ao excluir usuário: ',  error)
      }
    );
  }

  pagCriarUsuario(){
    this.router.navigate(['/pages/criar-usuario']);
  }

  pagAtualizarUsuario(userId: any){
    this.router.navigate(['/pages/atualizar-usuario', userId]);
  }

  pagUsuarioUnico(userId: any) {
    this.router.navigate(['/pages/usuario-unico', userId]);
  }
}
