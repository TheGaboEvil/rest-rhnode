import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNodetestComponent } from './crear-nodetest.component';

describe('CrearNodetestComponent', () => {
  let component: CrearNodetestComponent;
  let fixture: ComponentFixture<CrearNodetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearNodetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNodetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
