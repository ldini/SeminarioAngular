import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryAboutComponent } from './brewery-about.component';

describe('BreweryAboutComponent', () => {
  let component: BreweryAboutComponent;
  let fixture: ComponentFixture<BreweryAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
