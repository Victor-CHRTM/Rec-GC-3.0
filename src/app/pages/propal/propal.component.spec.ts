import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropalComponent } from './propal.component';

describe('PropalComponent', () => {
  let component: PropalComponent;
  let fixture: ComponentFixture<PropalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropalComponent]
    });
    fixture = TestBed.createComponent(PropalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
