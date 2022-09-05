import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-html-css-gama-academy'; livros = [
    { "nome":"teste Objeto", "descr":"teste desc", "autor":"teste autor", "editora":"teste editora" },
    { "nome":"teste Objeto 2", "descr":"teste desc2", "autor":"teste autor2", "editora":"teste editora2" },
    { "nome":"teste Objeto3", "descr":"teste desc3", "autor":"teste autor3", "editora":"teste editora3" }
  ]
}


