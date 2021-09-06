import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Post} from '../model/post';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_URL + '/api/posts');
  }

  create(post: Post): Observable<any> {
    return this.httpClient.post<Post>(API_URL + '/api/posts/create', post);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(API_URL + '/api/posts/delete/' + id);
  }
  get(id: number): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/api/posts/' + id);
  }
  findByTitle(title: string): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/api/posts/search/' + title);
  }
  getPostUser(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_URL+ '/posts/'+localStorage.getItem("id"))
  }

}
