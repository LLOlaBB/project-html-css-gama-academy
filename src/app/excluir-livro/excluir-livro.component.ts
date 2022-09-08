import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-excluir-livro',
  templateUrl: './excluir-livro.component.html',
  styleUrls: ['./excluir-livro.component.css']
})
export class ExcluirLivroComponent implements OnInit {

   // @ts-ignore
   form: FormGroup;
   emEdicao: any | undefined;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: LivrosService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      titulo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      descr: [null],
      autor: [null],
      editora: [null]
    });

    
    this.route.params.subscribe(
       (params: any) => {
         const id = params["id"];
         const livro$ = this.service.loadById(id);
         livro$.subscribe(livro => this.emEdicao = livro);
       }
     );

  }

  onDelete(id: number) {
    
    this.service.delete(id).subscribe();
      // window.location.reload();
  }

}
