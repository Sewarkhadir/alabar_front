import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getTopicList():Observable<any[]> {
    return this.http.get<any[]>(`${ this.baseUrl }/topic/getAllTopics`);
  }
}
