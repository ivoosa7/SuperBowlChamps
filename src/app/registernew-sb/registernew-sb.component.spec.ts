import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternewSBComponent } from './registernew-sb.component';

describe('RegisternewSBComponent', () => {
  let component: RegisternewSBComponent;
  let fixture: ComponentFixture<RegisternewSBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisternewSBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisternewSBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
