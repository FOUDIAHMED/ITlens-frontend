import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from './subject.module';
import { AddSurveyEditionComponent } from '../add-survey-edition/add-survey-edition.component';



@NgModule({
  declarations: [ 
    
  ],
  imports: [
    CommonModule,AddSurveyEditionComponent
  ]
})
export class SurveyEdition {
  id!: number;
  startDate!:Date;
  endDate!:Date;
  year!:string;
  subjects!:Subject[];
 }
export { Subject };

