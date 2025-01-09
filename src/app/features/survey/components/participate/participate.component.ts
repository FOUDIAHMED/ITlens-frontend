import { Component, OnInit, signal } from '@angular/core';
import { SurveyService } from '../services/survey.service'; // Adjust the import based on your model structure
import { Subject, SurveyEdition } from '../model/survey-edition.module';
import { Survey } from '../model/survey.module';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-participate',
  standalone: true,
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ParticipateComponent implements OnInit {
  survey!: Survey;
  surveyEdition: SurveyEdition | null = null;
  selectedEdition!: SurveyEdition;
  closeform = signal(false);
  selectedSubject!: Subject;
  currentQuestionIndex = 0;
  hideEdition = signal(false);

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const surveyId = +this.route.snapshot.paramMap.get('id')!;
    this.loadSurveyEdition(surveyId);
  }

  loadSurveyEdition(surveyId: number): void {
    this.surveyService.getSurveyById(surveyId).subscribe((data: Survey) => {
      this.survey = data;
      console.log(data);
    });
  }

  showsubjects(edition: SurveyEdition): void {
    this.selectedEdition = edition;
    this.hideEdition.set(true);
  }

  showForm(subject: Subject, event: MouseEvent): void {
    if (this.selectedSubject === subject && (event.target as HTMLElement).classList.contains('bg-opacity-75')) {
      this.closeform.set(!this.closeform());
    } else  {
      this.selectedSubject = subject;
      this.closeform.set(true);
      this.currentQuestionIndex = 0; 
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.selectedSubject.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  closeForm(): void {
    this.closeform.set(false);
  }

  closeModalOnOutsideClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('bg-opacity-75')) {
      this.closeForm();
    }
  }
}
