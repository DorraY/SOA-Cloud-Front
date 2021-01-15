import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionTeacherService {

  private baseUrl = "http://localhost:8080/service-teacher/api/v1/sections"

  constructor(private http: HttpClient) { }

  getTeacherSection(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)    
  }

  createTeacherSection(teahcerSection: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, teahcerSection)
  }

  getTeacherSectionList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  deleteTeacherSection(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,
    {responseType: 'text'}) 
  }

  updateTeacherSection(id:number, value:any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

  
}
