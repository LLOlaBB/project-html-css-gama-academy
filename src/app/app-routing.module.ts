import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { EditarLivroComponent } from './editar-livro/editar-livro.component';
import { ExcluirLivroComponent } from './excluir-livro/excluir-livro.component';
import { AdicionarLivroComponent } from './adicionar-livro/adicionar-livro.component';

const routes: Routes = [
  {
    path: "",
    component: ListarLivrosComponent
  },
  {
    path:"editar-livro/:id",
    component: EditarLivroComponent
  },
  {
    path:"excluir-livro/:id",
    component: ExcluirLivroComponent
  },
  {
    path:"",
    component: AdicionarLivroComponent,
    outlet: "adicionar"
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
