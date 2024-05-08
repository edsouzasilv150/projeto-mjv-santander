import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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

  saveUsersToLocalStorage(usuarios: IUser[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(usuarios));
  }

  getUserById(userId: string): Observable<IUser> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<IUser>(url);
  }

  createUser(newUser: IUser): Observable<IUser> {
    const url = `${this.apiUrl}/user/create`;
    return this.http.post<IUser>(url, newUser);
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
