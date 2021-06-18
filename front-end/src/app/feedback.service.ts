import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private feedbackUrl = 'http://localhost:3000/feedback/create';
  private feedbackGetUrl = "http://localhost:3000/feedback";


  constructor(private http:HttpClient) { }

  addFeedback(feedback:Feedback): Observable<Feedback> {
   return this.http.post<Feedback>(this.feedbackUrl,JSON.stringify(feedback),this.httpOptions)
  }
    
  
  sendGetRequest() {
    return this.http.get<Feedback[]>(this.feedbackGetUrl);
  }
}
