import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Owner} from './owner.module';
import {SurveyEdition} from './survey-edition.module';
import { SurveyEditionsItemComponent } from '../survey-editions-item/survey-editions-item.component';
import { SurveyItemComponent } from '../survey-item/survey-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SurveyEditionsItemComponent, // Import the standalone component
    SurveyItemComponent, // Import the standalone component
  ],
  exports: [
    SurveyEditionsItemComponent, // Export the standalone component
    SurveyItemComponent, // Export the standalone component
  ]
})
export class Survey {
  [x: string]: any;
  id!: string;
  title!:string;
  description!:string;
  owner!:Owner;
  ownerId!:number;
  surveyEditions!:SurveyEdition[];
}
