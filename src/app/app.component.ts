import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SurveyListComponent} from './features/survey/components/survey-list/survey-list.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
