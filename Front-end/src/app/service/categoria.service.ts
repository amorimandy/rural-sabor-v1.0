import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../Model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://rural-sabor.herokuapp.com/cat', this.token)
  }

  getByIdCategoria(id:number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://rural-sabor.herokuapp.com/cat/${id}`, this.token)
  }

  getByNomeCategoria(categoria : string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`https://rural-sabor.herokuapp.com/cat/categoria/${categoria}`, this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('https://rural-sabor.herokuapp.com/cat', categoria, this.token)
  }

  putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>('https://rural-sabor.herokuapp.com/cat', categoria, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`https://rural-sabor.herokuapp.com/cat/${id}`, this.token)
  }
}
