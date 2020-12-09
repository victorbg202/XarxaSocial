import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementLlistaPerfilComponent } from './element-llista-perfil.component';

describe('ElementLlistaPerfilComponent', () => {
  let component: ElementLlistaPerfilComponent;
  let fixture: ComponentFixture<ElementLlistaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementLlistaPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementLlistaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
