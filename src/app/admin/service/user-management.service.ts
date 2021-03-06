import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../model/user';
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<User>{
    return this.http.get<User>(API_URL+"/api/auth/admin/users")
  }
  findById(id: number): Observable<User>{
    return this.http.get<User>(`${API_URL}/api/auth/admin/users/${id}`);
  }
  update(id: number, user: User): Observable<User>{
    return this.http.put<User>(`${API_URL}/api/auth/admin/users/${id}`,user)
  }
  delete(id: number): Observable<User>{
    return this.http.delete<User>(`${API_URL}//api/auth/admin/users/${id}`)
  }
}
