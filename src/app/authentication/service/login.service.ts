import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginForm} from '../model/login-form';
import {JwtResponse} from '../model/jwt-response';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(login: LoginForm):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(API_URL+'/api/auth/signin', login);
  }
}
