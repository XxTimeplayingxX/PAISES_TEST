import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesFavRenderComponent } from './paises-fav-render.component';

describe('PaisesFavRenderComponent', () => {
  let component: PaisesFavRenderComponent;
  let fixture: ComponentFixture<PaisesFavRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisesFavRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisesFavRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
