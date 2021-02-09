import { Usuario } from './../Model/Usuario';
import { UserLogin } from './../Model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://rural-sabor.herokuapp.com/usuarios/logar', userLogin)
  }
  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://rural-sabor.herokuapp.com/usuarios/cadastrar', usuario)
  }

  getByIdUsuario(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(`https://rural-sabor.herokuapp.com/usuarios/${id}`)
  }/*  */

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }
}
