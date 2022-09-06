import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Livros } from '../livros';
import { LivrosService } from '../livros.service';


@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  livros: Livros[] = [];

  constructor(private service: LivrosService, private router:Router, private route:ActivatedRoute) {}



  ngOnInit(): void {
    this.service.getLivros().subscribe(dados =>this.livros = dados);
  }

  //livros = [
    // {
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
    // }
  //]

  onEdit(id: any){
    this.router.navigate(['editar-livro', id]);
  }

}
