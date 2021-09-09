import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Post} from '../../model/post';
import {Hashtag} from '../../admin/model/hashtag';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_URL + '/api/posts/public');
  }

  create(post: Post): Observable<any> {
    return this.httpClient.post<Post>(API_URL + '/api/posts/create', post);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(API_URL + '/api/posts/delete/' + id);
  }
  edit(post: Post): Observable<any> {
    return this.httpClient.put<any>(API_URL + '/api/posts/edit', post);
  }
  get(id: number): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/api/posts/' + id);
  }
  findByTitle(title: string): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/api/posts/search/public' + title);
  }
  findAllByUserId(id: number): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/api/posts/user/' + id);
  }
  findAllByHashtag(id: number): Observable<Hashtag> {
    return this.httpClient.get<Hashtag>(API_URL + '/api/posts/search/hashtag/' + id);
  }
  findMyPostByTitle(id: number, title: string): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/api/posts/search/' + id + '/' + title);
  }
  findMyPostByHashtag(userId: number, hashtagId: number): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/api/posts/user/' + userId + '/' + hashtagId);
  }
  findTop(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_URL + '/api/posts/search/date/'+ 4)
  }

}
