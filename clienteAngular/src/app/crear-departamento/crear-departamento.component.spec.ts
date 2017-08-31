import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDepartamentoComponent } from './crear-departamento.component';

describe('CrearDepartamentoComponent', () => {
  let component: CrearDepartamentoComponent;
  let fixture: ComponentFixture<CrearDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
