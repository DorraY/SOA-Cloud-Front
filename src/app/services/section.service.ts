import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private baseUrl = "http://localhost:8080/service-student/api/v1/sections"

  constructor(private http: HttpClient) { }

  getSection(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)    
  }

  createSection(section: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, section)
  }

  getSectionList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  deleteSection(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,
    {responseType: 'text'}) 
  }

  updateSection(id:number, value:any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }
}
