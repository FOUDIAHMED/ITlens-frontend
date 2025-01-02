import { Component, EventEmitter, Output, signal } from '@angular/core';
import { SurveyService } from '../components/services/survey.service';
import { Owner } from '../components/model/owner.module';
import { Survey } from '../components/model/survey.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-survey',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-survey.component.html',
  styleUrl: './add-survey.component.css'
})
export class AddSurveyComponent {
  @Output() surveyAdded = new EventEmitter<void>();
  newSurvey: Survey = {
      id: '',
      title: '',
      description: '',
      ownerId: 2,
      owner: new Owner(),
      surveyEditions: []
    };

  isModalOpen=signal(false);
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
      this.surveyAdded.emit();
      this.closeModal();
    });
  }

}


