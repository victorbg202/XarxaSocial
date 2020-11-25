import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaUsuarisComponent } from './llista-usuaris.component';

describe('LlistaUsuarisComponent', () => {
  let component: LlistaUsuarisComponent;
  let fixture: ComponentFixture<LlistaUsuarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaUsuarisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaUsuarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
