import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, IUser } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = environment.API_PATH;
  private localStorageKey = 'usuarios';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    const localData = localStorage.getItem(this.localStorageKey);
    if(localData) {
      return of(JSON.parse(localData));
    } else {
      return this.http.get<ApiResponse>(`${this.apiUrl}/user`).pipe(
        map(response => {
          this.saveUsersToLocalStorage(response.data); // Salva os dados no localStorage
          return response.data;
        }),
        catchError(error => {
          console.error('Erro ao obter usuários da API. Tentando recuperar do localStorage.', error);
          return of([]);
        })
      );
    }
  }

  private saveUsersToLocalStorage(usuarios: IUser[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(usuarios));
  }

  getUserById(userId: string): Observable<IUser> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<IUser>(url);
  }

  createUser(newUser: IUser): Observable<IUser> {
    const url = `${this.apiUrl}/user/create`;
    // return this.http.post<IUser>(url, newUser);
    const formData: FormData = new FormData();
    formData.append('firstName', newUser.firstName);
    formData.append('lastName', newUser.lastName);
    formData.append('title', newUser.title);
    formData.append('gender', newUser.gender);
    formData.append('email', newUser.email);
    formData.append('picture', newUser.picture);

    return this.http.post<IUser>(url, formData).pipe(
      map(user => {
        const usuarios = [...this.getUsersFromLocalStorage(), user];
        this.saveUsersToLocalStorage(usuarios);
        return user;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      // Erro no cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // O backend retornou um código de resposta de erro
      errorMessage = `Código: ${error.status}, Mensagem: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private getUsersFromLocalStorage(): IUser[] {
    const localData = localStorage.getItem(this.localStorageKey);
    return localData ? JSON.parse(localData) : [];
  }

  updateUser(userId: string, updatedUser: Partial<IUser>): Observable<IUser> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.put<IUser>(url, updatedUser);
  }

  deleteUser(userId: string): Observable<string> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.delete(url, { responseType: 'text' });
  }
}
