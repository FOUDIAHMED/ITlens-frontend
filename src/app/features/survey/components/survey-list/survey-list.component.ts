import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey } from '../model/survey.module';
import { SurveyService } from '../services/survey.service';
import { SurveyItemComponent } from '../survey-item/survey-item.component';
import { Owner } from '../model/owner.module';
import { FormsModule } from '@angular/forms';
import { AddSurveyComponent } from "../../add-survey/add-survey.component";
import { UpdateSurveyComponent } from '../../update-survey/update-survey.component';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule, SurveyItemComponent, FormsModule, AddSurveyComponent ],
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
selectedSurvey: any;
  
  surveys: Survey[] = [];
  isModalOpen = signal(false);
  isPupUpOpen = signal(false);
  isVisibleUpdateSurveyPopup = signal(false);
  updatedSurvey!: Survey;
  

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  handleUpdatePopupVisibility(visibility : boolean): void {
    this.isVisibleUpdateSurveyPopup.set(visibility);
  }

  loadSurveys(): void {
    this.surveyService.getSurveysList().subscribe((data: Survey[]) => {
      this.surveys = data;
    });
  }
  openPopUp(): void {
    this.isPupUpOpen.set(true);
  }
  closePopUp(): void {
    this.isPupUpOpen.set(false);
  }
  handleSurveyAdded():void{
    this.loadSurveys();
    this.closePopUp();
  }

  openModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  closeModalOnOutsideClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('bg-opacity-75')) {
      this.closeModal();
    }
  }
  

  

  trackById(index: number, item: Survey): string {
    return item.id;
  }

  handleSurveyDeleted(surveyId: string): void {
    this.surveys = this.surveys.filter(survey => survey.id !== surveyId);
  }
  
    
}
