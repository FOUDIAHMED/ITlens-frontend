import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Survey} from '../model/survey.module';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private readonly baseURL = "http://localhost:8080/surveys/all/";

  constructor(private httpClient: HttpClient) { }

  getSurveysList(): Observable<Survey[]>{
    return this.httpClient.get<Survey[]>(this.baseURL);
  }
}
