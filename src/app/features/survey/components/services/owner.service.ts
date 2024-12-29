import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../model/owner.module';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private baseUrl: string = 'http://localhost:8080/api/owners/';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Owner[]> {
    return this.http.get<Owner[]>(`${this.baseUrl}all/`);
  }

  findById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.baseUrl}${id}`);
  }

  create(dto: Owner): Observable<Owner> {
    return this.http.post<Owner>(`${this.baseUrl}create/`, dto);
  }

  update(id: number, dto: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.baseUrl}${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}