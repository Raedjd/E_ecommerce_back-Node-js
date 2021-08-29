import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocategoryComponent } from './infocategory.component';

describe('InfocategoryComponent', () => {
  let component: InfocategoryComponent;
  let fixture: ComponentFixture<InfocategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
