import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEditionsItemComponent } from './survey-editions-item.component';

describe('SurveyEditionsItemComponent', () => {
  let component: SurveyEditionsItemComponent;
  let fixture: ComponentFixture<SurveyEditionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyEditionsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyEditionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
