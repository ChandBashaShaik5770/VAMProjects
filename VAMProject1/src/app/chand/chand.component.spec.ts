import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandComponent } from './chand.component';

describe('ChandComponent', () => {
  let component: ChandComponent;
  let fixture: ComponentFixture<ChandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
