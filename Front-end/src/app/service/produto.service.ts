import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../Model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>('https://rural-sabor.herokuapp.com/prod', this.token)
  }
  getByIdProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`https://rural-sabor.herokuapp.com/prod/${id}`, this.token)
  }
  getByNomeProduto(nome : string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://rural-sabor.herokuapp.com/prod/nome/${nome}`, this.token)
  }
  getByRegiaoProduto(regiao : string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://rural-sabor.herokuapp.com/prod/regiao/${regiao}`, this.token)
  } 

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('https://rural-sabor.herokuapp.com/prod', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('https://rural-sabor.herokuapp.com/prod', produto, this.token)
  }
  
  deleteProduto(id: number) {
    return this.http.delete(`https://rural-sabor.herokuapp.com/prod/${id}`, this.token)
  }

}
