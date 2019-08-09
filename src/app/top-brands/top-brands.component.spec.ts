import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBrandsComponent } from './top-brands.component';

describe('TopBrandsComponent', () => {
  let component: TopBrandsComponent;
  let fixture: ComponentFixture<TopBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
