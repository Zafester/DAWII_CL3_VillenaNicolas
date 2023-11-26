import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestListaComponent } from './api-rest-lista.component';

describe('ApiRestListaComponent', () => {
  let component: ApiRestListaComponent;
  let fixture: ComponentFixture<ApiRestListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
