import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Survey} from '../model/survey.module';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private readonly baseURL = "http://localhost:8080/surveys/";

  constructor(private httpClient: HttpClient) { }

  getSurveysList(): Observable<Survey[]>{
    return this.httpClient.get<Survey[]>(`${this.baseURL}all/`);
  }
  addSurvey(survey: Survey): Observable<Survey> {
    return this.httpClient.post<Survey>(`${this.baseURL}create/`, survey);
  }
  deleteSurvey(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}${id}`);
  }
  updateSurvey(id: string,survey:Survey): Observable<Survey> {
    return this.httpClient.put<Survey>(`${this.baseURL}${id}`, survey);
  }
}
