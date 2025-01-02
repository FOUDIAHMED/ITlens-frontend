import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { question } from './question.module';
import { Answer } from './answer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Subject { 
  id!:number;
  title!:string;
  parentSubject!:Subject;
  subSubjects!:Subject[];
  questions!:Question[];


}
export interface Question {
    id: number;
    question: string;
    answerCount: number;
    subject: Subject;
    answers: Answer[]; 
  }
