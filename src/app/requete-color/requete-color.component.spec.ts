import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteColorComponent } from './requete-color.component';

describe('RequeteColorComponent', () => {
  let component: RequeteColorComponent;
  let fixture: ComponentFixture<RequeteColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequeteColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequeteColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
