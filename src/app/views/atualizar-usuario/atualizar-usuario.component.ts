import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { IUser } from 'src/app/shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.scss']
})
export class AtualizarUsuarioComponent implements OnInit {
  usuarioUnico: IUser[] = [];
  formulario: FormGroup;

  constructor(
    private usuarioUnicoService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.obterUnicoUsuario(userId);
    });

    this.formulario = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      title: [''],
      gender: [''],
      email: [''],
      picture: [''],
      phone: [''],
      city: [''],
      state: [''],
    })
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

  atualizarUsuario() {
    if (this.formulario.invalid) {
      console.error('Preencha os campos obrigatórios.');
      return;
    }

    const userId = this.usuarioUnico[0].id;
    const updatedUser: Partial<IUser> = this.formulario.value;

    this.usuarioUnicoService.updateUser(userId.toString(), updatedUser).subscribe(
      (response) => {
        console.log('Usuário atualizado com sucesso: ', response);
        localStorage.clear();
        this.pagExibirTodos();
      },
      (error) => {
        console.error('Erro ao tentar atualizar usuário: ', error);
      }
    );
  }

  pagExibirTodos() {
    this.router.navigate(['/']);
  }
}
