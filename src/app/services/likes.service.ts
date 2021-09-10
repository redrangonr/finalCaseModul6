import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post";
import {Likes} from "../model/likes";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Likes[]> {
    return this.httpClient.get<Likes[]>(API_URL + '/api/likes');
  }
  create(post: Post): Observable<any> {
    return this.httpClient.post<Likes>(API_URL + '/api/likes/create', post);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(API_URL + '/api/likes/delete/' + id);
  }
  checkLike(idUser: number,idPost: number): Observable<any> {
    return  this.httpClient.get(API_URL+ '/api/likes/search/'+idUser +'/'+idPost)
  }
  findTopLike(): Observable<Likes[]>{
    return this.httpClient.get<Likes[]>(API_URL+'/api/likes/search/top')
  }
  findLikeByIdPost(idPost: number): Observable<Likes[]> {
    return  this.httpClient.get<Likes[]>(API_URL+ '/api/likes/search/'+idPost)
  }
}

