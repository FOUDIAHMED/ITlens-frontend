import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Owner} from './owner.module';
import {SurveyEdition} from './survey-edition.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Survey {
  id!: string;
  title!:string;
  description!:string;
  owner!:Owner;
  surveyEditions!:SurveyEdition;
}
