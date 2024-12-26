import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private baseUrl: string="http://localhost:8080/api/surveys";


  constructor(private http: HttpClient) { }

  /*findAll(): Observable<SurveyResponseDto[]> {
    return this.http.get<SurveyResponseDto[]>(`${this.apiUrl}all/`);
  }

  findById(id: number): Observable<SurveyResponseDto> {
    return this.http.get<SurveyResponseDto>(`${this.apiUrl}${id}`);
  }

  create(dto: SurveyRequestDto): Observable<SurveyResponseDto> {
    return this.http.post<SurveyResponseDto>(`${this.apiUrl}create/`, dto);
  }

  update(id: number, dto: SurveyRequestDto): Observable<SurveyResponseDto> {
    return this.http.put<SurveyResponseDto>(`${this.apiUrl}${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }*/
}
