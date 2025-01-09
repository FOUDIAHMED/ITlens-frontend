import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey/components/model/survey.module';
import { SurveyService } from '../survey/components/services/survey.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'Home';
  surveys: Survey[] = [];
  constructor(private router:Router ,private surveyService: SurveyService) {}
  ngOnInit(): void {
    this.surveyService.getSurveysList().subscribe((data: Survey[]) => {
      this.surveys = data;
      console.log(data);
    });
  }

  showSurvey(surveyId:string):void{
    this.router.navigate(['/survey',surveyId]);
  }
  participate(surveyId:string):void{
    this.router.navigate(['/participate',surveyId]);
  }


}
