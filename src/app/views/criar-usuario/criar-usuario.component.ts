import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUser } from 'src/app/shared/models/user.model';

import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from  '@angular/forms' ;
import { ErrorStateMatcher } from  '@angular/material/core' ;

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss'],
})
export class CriarUsuarioComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  adicionarUsuario() {
    const user: IUser = {
      firstName: this.formulario.get('firstName').value,
      lastName: this.formulario.get('lastName').value,
      title: this.formulario.get('title').value,
      gender: this.formulario.get('gender').value,
      email: this.formulario.get('email').value,
      picture: this.formulario.get('picture').value,
      phone: this.formulario.get('phone').value,
      location: {
        city: this.formulario.get('city').value,
        state: this.formulario.get('state').value,
      }
    };

    this.usuarioService.createUser(user).subscribe(
      (response) => {
        console.log('Usuário adicionado com sucesso: ', response);
        localStorage.clear();
        this.pagExibirTodos();
      },
      (error) => {
        console.log('Erro ao tentar adicionar usuário: ', error);
      }
    );
  }

  pagExibirTodos() {
    this.router.navigate(['/']);
  }
}
