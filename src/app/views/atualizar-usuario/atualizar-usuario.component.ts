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
  users: IUser[] =[];
  usuarioUnico: IUser;
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
      console.log('userId:', userId);

      if (userId) {
        this.obterUnicoUsuario(userId);
      } else {
        console.error('ID do usuário não encontrado na rota.');
      }
    });

    this.formulario = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      title: [''],
      gender: [''],
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
          if (usuario) {
            this.usuarioUnico = usuario;

            this.formulario.patchValue({
              firstName: usuario.firstName,
              lastName: usuario.lastName,
              title: usuario.title,
              gender: usuario.gender,
              phone: usuario.phone,
              city: usuario.location?.city,
              state: usuario.location?.state
            });

            console.log('Usuário único:', this.usuarioUnico);
          } else {
            console.error('Usuário não encontrado');
          }
        },
        (error) => {
          console.error('Ocorreu um erro ao obter o usuário:', error);
        }
      );
  }



  atualizarUsuario() {
    console.log(this.usuarioUnico, 'chegou aqui chega dados atualizados')

    if (!this.usuarioUnico || this.formulario.invalid) {
      console.error('Preencha os campos obrigatórios.');
      return;
    }

    const userId = this.usuarioUnico.id;
    const updatedUser: Partial<IUser> = this.formulario.value;
    console.log(updatedUser, 'updatedUser')

    console.log(this.usuarioUnico, 'chegou aqui também chega os dados atualizados')

    this.usuarioUnicoService.updateUser(userId.toString(), this.usuarioUnico).subscribe(
      (response) => {
        console.log(this.usuarioUnico, 'recebeu os dados sem atualizar')
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
