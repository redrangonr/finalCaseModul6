import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
const API_URL = `${environment.apiUrl}`; @Injectable({
  providedIn: 'root'
})
export class CommmentpostService {

  constructor(private httpClient: HttpClient) { }
}
