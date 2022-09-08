import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livros } from './livros';
import { take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = 'http://localhost:3000/livros/';

  constructor(private http: HttpClient) { }

  getLivros() {
    return this.http.get<Livros[]>(this.API)
      .pipe(
        tap(console.log)
      );

    // return [{
    //   "id": 1,
    //   "nome": "teste Objeto",
    //   "descr": "teste desc",
    //   "autor": "teste autor",
    //   "editora": "teste editora"
    // },
    // {
    //   "id": 2,
    //   "nome": "teste Objeto 2",
    //   "descr": "teste desc2",
    //   "autor": "teste autor2",
    //   "editora": "teste editora2"
    // },
    // {
    //   "id": 3,
    //   "nome": "teste Objeto3",
    //   "descr": "teste desc3",
    //   "autor": "teste autor3",
    //   "editora": "teste editora3"
    // }];
  }

  loadById(id: number) {
    return this.http.get(`${this.API}` + id).pipe(take(1));
  }

  create(livro: any) {
    return this.http.post(this.API, livro).pipe(take(1));
  }

  // editarNoBanco(id: number,titulo: string, descr: string, autor: string, editora: string):Observable<any>{
  //   return this.http.put(`${this.API}`+ id, livro)
  // }
  
  update(id: number, livro: any){
  
    return this.http.put(`${this.API}${id}`, livro).pipe(take(1));
    
  }

  delete(id: number){
  
    return this.http.delete(`${this.API}${id}`).pipe(take(1));
    
  }

}
