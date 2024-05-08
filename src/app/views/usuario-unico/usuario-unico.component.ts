import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUser } from 'src/app/shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-unico',
  templateUrl: './usuario-unico.component.html',
  styleUrls: ['./usuario-unico.component.scss']
})
export class UsuarioUnicoComponent {
  usuarioUnico: IUser[] = [];

  constructor(
    private usuarioUnicoService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.obterUnicoUsuario(userId);
    });
  }

  obterUnicoUsuario(userId: string) {
    this.usuarioUnicoService.getUserById(userId)
      .subscribe(
        (usuario: IUser) => {
          this.usuarioUnico = [usuario];
        }, (error) =>{
          console.error('Ocorreu um erro ao obter o usuário:', error)
        }
      );
  }

  pagExibirTodos() {
    this.router.navigate(['/']);
  }
}
