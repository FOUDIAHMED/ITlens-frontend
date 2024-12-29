import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey } from '../model/survey.module';
import { SurveyService } from '../services/survey.service';
import { SurveyItemComponent } from '../survey-item/survey-item.component';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule, SurveyItemComponent],
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.surveyService.getSurveysList().subscribe({
      next: (data: Survey[]) => {
        this.surveys = data;
        console.log('Surveys loaded:', this.surveys);
      },
      error: (err: any) => {
        console.error('Error fetching surveys:', err);
      }
    });
  }
}
