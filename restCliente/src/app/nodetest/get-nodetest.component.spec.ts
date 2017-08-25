import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNodetestComponent } from './get-nodetest.component';

describe('GetNodetestComponent', () => {
  let component: GetNodetestComponent;
  let fixture: ComponentFixture<GetNodetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNodetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNodetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
