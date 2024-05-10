import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUser } from 'src/app/shared/models/user.model';

import { FormBuilder, FormGroup,  Validators } from  '@angular/forms' ;


@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss'],
})
export class CriarUsuarioComponent implements OnInit {

  formulario: FormGroup;
  selectedFile: File | null = null;

  usuario: IUser[] = []
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      title: [''],
      gender: [''],
      email: ['', [Validators.required, Validators.email]],
      picture: [''],
      phone: [''],
      city: [''],
      state: [''],
    })
  }

  adicionarUsuario() {
    if (this.formulario.invalid) {
      console.error('Preencha os campos obrigatórios.');
      return;
    }

    const user: IUser = this.formulario.value;
    console.log('Usuário a ser criado: ', user);

    this.usuarioService.createUser(user).subscribe(
      (response) => {
        console.log(response, 'chegou aqui')
        console.log('Usuário adicionado com sucesso: ', response);
        localStorage.clear();
        this.pagExibirTodos();
      },
      (error) => {
        console.log('aqui chega', user)
        console.log('Erro ao tentar adicionar usuário: ', error);
      }
    );
  }

  pagExibirTodos() {
    this.router.navigate(['/']);
  }
}
