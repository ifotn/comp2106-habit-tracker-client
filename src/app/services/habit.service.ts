import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  // when service instance created, also create http client instance to make API calls
  constructor(private http: HttpClient) { }

  // server API domain used for all calls
  serverUrl: string = environment.serverUrl;

  // GET: all.  API method is public so withCredentials: true NOT needed
  getHabits(keyword: string | undefined) {
    if (keyword) {
      return this.http.get(`${this.serverUrl}/habits?keyword=${keyword}`);
    }
    else {
      return this.http.get(`${this.serverUrl}/habits`);
    }
  }

  // // GET: one
  // getHabit(_id: string) {
  //   return this.http.get(`${this.serverUrl}/habits/${_id}`);
  // }

  // POST: add new object.  needs to pass jwt from http-only cookie as API method is private
  addHabit(habit: any) {
    return this.http.post(`${this.serverUrl}/habits`, habit, { withCredentials: true });
  }

  // DELETE.  needs to pass jwt from http-only cookie as API method is private
  deleteHabit(_id: string) {
    return this.http.delete(`${this.serverUrl}/habits/${_id}`, { withCredentials: true })
  }

  // UPDATE.  needs to pass jwt from http-only cookie as API method is private
  updateHabit(habit: any) {
    return this.http.put(`${this.serverUrl}/habits/${habit._id}`, habit, { withCredentials: true })
  }

}
