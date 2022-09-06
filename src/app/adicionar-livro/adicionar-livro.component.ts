
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivrosService } from '../livros.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;


  constructor(private fb: FormBuilder, private service:LivrosService, private location: Location) { }


  ngOnInit() {
    this.form = this.fb.group({
      titulo: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      descr: [null],
      autor: [null],
      editora: [null]
    });
  }

  onSubmit(){
    if(this.form.valid){
      console.log(this.form.value)
      this.service.create(this.form.value).subscribe();
    }
  }

  onCancel(){

  }

  
}
