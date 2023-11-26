import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestDetalleComponent } from './api-rest-detalle.component';

describe('ApiRestDetalleComponent', () => {
  let component: ApiRestDetalleComponent;
  let fixture: ComponentFixture<ApiRestDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
