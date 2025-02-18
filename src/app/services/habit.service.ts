import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  // when service instance created, also create http client instance to make API calls
  constructor(private http: HttpClient) { }

  // server API domain used for all calls
  serverUrl: string = environment.serverUrl;

  // GET: all
  getHabits() {
    return this.http.get(`${this.serverUrl}/habits`);
  }

}
