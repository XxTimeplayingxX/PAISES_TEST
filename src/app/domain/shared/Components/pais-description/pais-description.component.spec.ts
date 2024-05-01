import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDescriptionComponent } from './pais-description.component';

describe('PaisDescriptionComponent', () => {
  let component: PaisDescriptionComponent;
  let fixture: ComponentFixture<PaisDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
