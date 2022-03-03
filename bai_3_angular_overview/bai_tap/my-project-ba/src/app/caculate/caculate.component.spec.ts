import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaculateComponent } from './caculate.component';

describe('CaculateComponent', () => {
  let component: CaculateComponent;
  let fixture: ComponentFixture<CaculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
