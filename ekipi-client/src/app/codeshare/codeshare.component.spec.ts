import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeshareComponent } from './codeshare.component';

describe('CodeshareComponent', () => {
  let component: CodeshareComponent;
  let fixture: ComponentFixture<CodeshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
