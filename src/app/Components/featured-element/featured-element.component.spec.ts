import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedElementComponent } from './featured-element.component';

describe('FeaturedElementComponent', () => {
  let component: FeaturedElementComponent;
  let fixture: ComponentFixture<FeaturedElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
