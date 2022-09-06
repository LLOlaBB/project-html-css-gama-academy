import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { EditarLivroComponent } from './editar-livro/editar-livro.component';
import { ExcluirLivroComponent } from './excluir-livro/excluir-livro.component';
import { AppRoutingModule } from './app-routing.module';
import { AdicionarLivroComponent } from './adicionar-livro/adicionar-livro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarLivrosComponent,
    EditarLivroComponent,
    ExcluirLivroComponent,
    AdicionarLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
