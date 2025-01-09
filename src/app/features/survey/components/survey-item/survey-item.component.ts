import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey } from '../model/survey.module';
import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';
import { FormsModule } from '@angular/forms';
import { Owner } from '../model/owner.module';
import { ChangeDetectorRef } from '@angular/core';
import { UpdateSurveyComponent } from "../../update-survey/update-survey.component";
import { AddSurveyEditionComponent } from "../add-survey-edition/add-survey-edition.component";
import { SurveyEditionRequest } from '../model/survey-edition-request.module';
import { SurveyEditionService } from '../services/survey-edition.service';
import { SurveyEdition } from '../model/survey-edition.module';

@Component({
  selector: 'app-survey-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyItemComponent implements OnChanges {
  @Input() survey!: Survey;
  @Output() delete = new EventEmitter<string>();
  surveys: Survey[] = [];
  @Output() isModalOpen = new EventEmitter<boolean>(false);
  isVisibleUpdateSurveyPopup=signal(false);
  isVisibleAddEditionPopup=signal(false);
  SurveyEdition:SurveyEditionRequest=new SurveyEditionRequest();
  updatedSurvey: Survey = {
        id: '',
        title: '',
        description: '',
        ownerId: 2,
        owner: new Owner(),
        surveyEditions: []
      };

        showAddEditionPopup = false;

      openAddEditionPopup() {
        this.isVisibleAddEditionPopup.set(true);
      }
    
      closeAddEditionPopup() {
        this.isVisibleAddEditionPopup.set(false);
      }
  constructor(private router: Router, private surveyService: SurveyService,private surveyEditionService:SurveyEditionService,private cdr: ChangeDetectorRef) {}
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
  addEdition(surveyId:string):void{
    this.SurveyEdition.surveyId=surveyId;
    this.surveyEditionService.addSurveyEdition(this.SurveyEdition).subscribe((data: SurveyEdition) => {
      this.survey.surveyEditions = [...this.survey.surveyEditions, data];
      this.closeAddEditionPopup();
      this.loadSurveys();
    });
    
  }

  openUpdatePopup(): void {
    this.isVisibleUpdateSurveyPopup.set(true);
  }
  closeModal(): void {
    this.isVisibleUpdateSurveyPopup.set(false);
  }
  closeModalOnOutsideClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('bg-opacity-75')) {
      this.closeModal();
    }
  }

  updateSurvey(surveyId:string): void {
    this.surveyService.updateSurvey(surveyId,this.updatedSurvey).subscribe(() => {
      this.closeModal();
      this.loadSurveys();
    });
  }
    

}
