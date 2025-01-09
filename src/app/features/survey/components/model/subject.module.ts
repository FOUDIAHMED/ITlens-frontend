import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question} from './question.module';



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

