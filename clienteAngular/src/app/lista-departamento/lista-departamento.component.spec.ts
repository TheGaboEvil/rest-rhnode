import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDepartamentoComponent } from './lista-departamento.component';

describe('ListaDepartamentoComponent', () => {
  let component: ListaDepartamentoComponent;
  let fixture: ComponentFixture<ListaDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
