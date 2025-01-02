import { Routes } from '@angular/router';
import {SurveyListComponent} from './features/survey/components/survey-list/survey-list.component';
import {SurveyItemComponent} from './features/survey/components/survey-item/survey-item.component';
import { SurveyEditionsItemComponent } from './features/survey/components/survey-editions-item/survey-editions-item.component';

export const routes: Routes = [
  {
    path:'',component:SurveyListComponent,title:"surves page"
  },{
  path:'surveys-editions',component:SurveyItemComponent,title:"survey page"
  },
  { path: 'survey-edition/:id', component: SurveyEditionsItemComponent },
];
