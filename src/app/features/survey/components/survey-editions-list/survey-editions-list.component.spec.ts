import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEditionsListComponent } from './survey-editions-list.component';

describe('SurveyEditionsListComponent', () => {
  let component: SurveyEditionsListComponent;
  let fixture: ComponentFixture<SurveyEditionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyEditionsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyEditionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
