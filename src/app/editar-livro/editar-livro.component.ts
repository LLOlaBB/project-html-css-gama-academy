import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;
  emEdicao: any | undefined;

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private service: LivrosService) { }

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
        livro$.subscribe(livro => {this.emEdicao = livro;
          this.updateForm(livro);}
        );
      }
    );
  }
  onEditar(id: number) {
    
    this.service.update(id, this.form.value).subscribe();
      // window.location.reload();
  }

  onCancel() {
    this.form.reset();

  }
  updateForm(livro: any){
    this.form.patchValue({
      id: this.emEdicao.id,
      titulo: this.emEdicao.titulo,
      descr: this.emEdicao.descr,
      autor: this.emEdicao.autor,
      editora: this.emEdicao.editora
    });
  }

}
