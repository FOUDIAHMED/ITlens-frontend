import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SurveyEditionRequest {
  
  startDate!:Date;
  endDate!:Date;
  year!:number;
  surveyId!: string;
 }
