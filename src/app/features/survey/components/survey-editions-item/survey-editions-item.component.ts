import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import
import { ActivatedRoute } from '@angular/router';
import { SurveyEditionService } from '../services/survey-edition.service';
import { SurveyEdition,Subject } from '../model/survey-edition.module';

@Component({
  selector: 'app-survey-editions-item',
  templateUrl: './survey-editions-item.component.html',
  styleUrls: ['./survey-editions-item.component.css'],
  standalone: true,
  imports: [CommonModule] // Add CommonModule to the imports array
})
export class SurveyEditionsItemComponent implements OnInit {
  edition!: SurveyEdition;

  constructor(
    private route: ActivatedRoute,
    private surveyEditionService: SurveyEditionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.surveyEditionService.getSurveyEditionById(id).subscribe((data: SurveyEdition) => {
        this.edition = data;
        
        console.log(this.edition);
      });
    });
  }
  trackById(index: number, item: any): number {
    return item.id;
  }

  selectedSubSubject!: Subject;

  selectSubSubject(subSubject: Subject): void {
    this.selectedSubSubject = subSubject;
  }
}