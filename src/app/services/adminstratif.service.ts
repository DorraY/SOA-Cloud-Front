import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminstratifService {
  
  private baseUrl = "http://localhost:8080/service-agent/api/v1/agents"

  constructor(private http: HttpClient) { }

  getAgent(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)    
  }

  createAgent(adminstratif: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, adminstratif)
  }

  getAgentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  deleteAgent(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,
    {responseType: 'text'}) 
  }

  updateAgent(id:number, value:any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }


}
