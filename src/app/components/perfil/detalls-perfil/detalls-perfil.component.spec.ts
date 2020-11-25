import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallsPerfilComponent } from './detalls-perfil.component';

describe('DetallsPerfilComponent', () => {
  let component: DetallsPerfilComponent;
  let fixture: ComponentFixture<DetallsPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallsPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallsPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
