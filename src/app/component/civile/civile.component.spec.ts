import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivileComponent } from './civile.component';

describe('CivileComponent', () => {
  let component: CivileComponent;
  let fixture: ComponentFixture<CivileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CivileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
