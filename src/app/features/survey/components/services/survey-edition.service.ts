import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyEdition } from '../model/survey-edition.module';

@Injectable({
  providedIn: 'root'
})
export class SurveyEditionService {
  private baseUrl = 'http://localhost:8080/surveys_editions';

  constructor(private http: HttpClient) {}

  getSurveyEditionById(id: number): Observable<SurveyEdition> {
    return this.http.get<SurveyEdition>(`${this.baseUrl}/${id}`);
  }
}
