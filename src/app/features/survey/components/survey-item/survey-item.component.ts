import { Component, Input, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey } from '../model/survey.module';

// @ts-ignore
@Component({
  selector: 'app-survey-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SurveyItemComponent {
  @Input() survey?: Survey;
}
