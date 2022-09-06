import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirLivroComponent } from './excluir-livro.component';

describe('ExcluirLivroComponent', () => {
  let component: ExcluirLivroComponent;
  let fixture: ComponentFixture<ExcluirLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
