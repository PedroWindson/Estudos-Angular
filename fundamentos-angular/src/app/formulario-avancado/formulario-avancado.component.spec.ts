import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAvancadoComponent } from './formulario-avancado.component';

describe('FormularioAvancadoComponent', () => {
  let component: FormularioAvancadoComponent;
  let fixture: ComponentFixture<FormularioAvancadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAvancadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAvancadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
