import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // get server API env var
  serverUrl: string = environment.serverUrl;

  // global username var available in any component 
  private usernameSource = new BehaviorSubject<string | null>(null);
  username = this.usernameSource.asObservable();

  setUsername(username: string): void {
    // set the global username after successful login
    this.usernameSource.next(username);
  }

  clearUsername(): void {
    // on logout, clear global username var
    this.usernameSource.next(null);
  }
  
  constructor(private http: HttpClient) { }

  register(user: any) {
    // call server api to try to register the new user
    return this.http.post(`${this.serverUrl}/users/register`, user);
  }

  login(user: any) {
    // call server api to try to authenticate the user
    return this.http.post(`${this.serverUrl}/users/login`, user, { withCredentials: true });
  }

  logout() {
    return this.http.get(`${this.serverUrl}/users/logout`, { withCredentials: true });
  }
}
