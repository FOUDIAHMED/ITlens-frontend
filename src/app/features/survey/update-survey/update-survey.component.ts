import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Survey } from '../components/model/survey.module';
import { Owner } from '../components/model/owner.module';
import { SurveyService } from '../components/services/survey.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-survey',
  imports: [CommonModule,FormsModule],
  templateUrl: './update-survey.component.html',
  styleUrls: ['./update-survey.component.css']
})
export class UpdateSurveyComponent {
  @Input() survey!: Survey;
  @Output() update = new EventEmitter<void>();
  isModalOpen=signal(false);
  
  newSurvey: Survey = {
    id: '',
    title: '',
    description: '',
    ownerId: 2,
    owner: new Owner(),
    surveyEditions: []
  };

  
  constructor(private surveyService: SurveyService) {}

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

  addSurvey(): void {
    this.newSurvey.owner.setId(2) ;
    this.newSurvey.owner.setName('John Doe');
    this.surveyService.addSurvey(this.newSurvey).subscribe(() => {
      this.update.emit();
      this.closeModal();
    });
  }

  closePopup(): void {
    console.log('closePopup');
    this.update.emit();
  }

  updateSurvey(): void {
    this.surveyService.updateSurvey(this.survey.id,this.survey).subscribe(() => {
      this.update.emit();
    });
  }
}
