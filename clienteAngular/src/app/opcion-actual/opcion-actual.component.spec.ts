import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionActualComponent } from './opcion-actual.component';

describe('OpcionActualComponent', () => {
  let component: OpcionActualComponent;
  let fixture: ComponentFixture<OpcionActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
