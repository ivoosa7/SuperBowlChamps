import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBChampionsListComponent } from './sbchampions-list.component';

describe('SBChampionsListComponent', () => {
  let component: SBChampionsListComponent;
  let fixture: ComponentFixture<SBChampionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SBChampionsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SBChampionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
