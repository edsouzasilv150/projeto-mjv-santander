import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioUnicoComponent } from './usuario-unico.component';

describe('UsuarioUnicoComponent', () => {
  let component: UsuarioUnicoComponent;
  let fixture: ComponentFixture<UsuarioUnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioUnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
