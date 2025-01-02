import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey } from '../model/survey.module';
import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';
import { FormsModule } from '@angular/forms';
import { Owner } from '../model/owner.module';
import { UpdateSurveyComponent } from "../../update-survey/update-survey.component";

@Component({
  selector: 'app-survey-item',
  standalone: true,
  imports: [CommonModule, FormsModule, UpdateSurveyComponent],
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyItemComponent implements OnChanges {
  @Input() survey!: Survey;
  @Output() delete = new EventEmitter<string>();
  surveys: Survey[] = [];
  @Output() isModalOpen = new EventEmitter<boolean>(false);
  updatedSurvey: Survey = {
        id: '',
        title: '',
        description: '',
        ownerId: 2,
        owner: new Owner(),
        surveyEditions: []
      };

  
  constructor(private router: Router, private surveyService: SurveyService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['survey'] && changes['survey'].currentValue) {
      this.updatedSurvey = { ...this.survey };
    }
  }

  goToEdition(editionId: number): void {
    this.router.navigate(['/survey-edition', editionId]);
  }

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys(): void {
    this.surveyService.getSurveysList().subscribe((data: Survey[]) => {
      this.surveys = data;
    });
  }

  deleteSurvey(surveyId: string): void {
    this.surveyService.deleteSurvey(surveyId).subscribe(() => {
      this.surveys = this.surveys.filter(survey => survey.id !== surveyId);
      console.log('Survey deleted');
      this.delete.emit(surveyId);
    });
  }

  openUpdatePopup(): void {
    this.isModalOpen.emit(true);
  }
  closeUpdatePopup(): void {
    this.isModalOpen.emit(false);
  }
  closeModalOnOutsideClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('bg-opacity-75')) {
      this.closeUpdatePopup();
    }
  }

  updateSurvey(surveyId:string): void {
    this.surveyService.updateSurvey(surveyId,this.updatedSurvey).subscribe(() => {
      this.closeUpdatePopup();
    });
  }
    

}
