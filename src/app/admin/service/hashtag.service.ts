import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Hashtag} from '../model/hashtag';
const API_URL=`${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Hashtag>{
    return this.http.get<Hashtag>(API_URL+"/api/auth/hashtags")
  }

  findById(id: number): Observable<Hashtag>{
    return this.http.get<Hashtag>(`${API_URL}/api/auth/hashtags/${id}`);
  }
  update(id: number, hastag: Hashtag): Observable<Hashtag>{
    return this.http.put<Hashtag>(`${API_URL}/api/auth/hashtags/${id}`,hastag)
  }
  delete(id: number): Observable<Hashtag>{
    return this.http.delete<Hashtag>(`${API_URL}//api/auth/hashtag/${id}`)
  }
}
