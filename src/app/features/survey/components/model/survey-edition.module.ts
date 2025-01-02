import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from './subject.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SurveyEdition {
  id!: number;
  year!:string;
  subjects!:Subject[];
 }
export { Subject };

