import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoDeListaDeUsuariosComponent } from './exibicao-de-lista-de-usuarios.component';

describe('ExibicaoDeListaDeUsuariosComponent', () => {
  let component: ExibicaoDeListaDeUsuariosComponent;
  let fixture: ComponentFixture<ExibicaoDeListaDeUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibicaoDeListaDeUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibicaoDeListaDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
