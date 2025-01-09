import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Answer } from './answer.module';
import { Subject } from './subject.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Question {
  id!: number;
  question!: string;
  answerCount!: number;
  subject!: Subject;
  answers!: Answer[]; 
  questionType!:QuestionType;
}

export enum QuestionType {
SINGLE_CHOICE='SINGLE_CHOICE'
,MULTIPLE_CHOICE='MULTIPLE_CHOICE'
}