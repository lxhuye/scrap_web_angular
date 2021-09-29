import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPicComponent } from './history-pic.component';

describe('HistoryPicComponent', () => {
  let component: HistoryPicComponent;
  let fixture: ComponentFixture<HistoryPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
