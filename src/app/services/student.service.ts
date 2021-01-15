import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/service-student/api/v1/students"

  constructor(private http: HttpClient) { }

  getStudent(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)    
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, student)
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  deleteStudent(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,
    {responseType: 'text'}) 
  }

  updateStudent(id:number, value:any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }
}
