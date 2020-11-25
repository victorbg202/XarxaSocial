import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaPerfilsComponent } from './llista-perfils.component';

describe('LlistaPerfilsComponent', () => {
  let component: LlistaPerfilsComponent;
  let fixture: ComponentFixture<LlistaPerfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaPerfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaPerfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
