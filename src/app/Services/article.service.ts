import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import {Article} from '../Models/article.model';
import {Observable} from 'rxjs/Observable';
import {Comment} from '../Models/comment.model';

@Injectable()
export class ArticleService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/articles';
  }
  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl);
  }
  getArticleById(id): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl + `/${id}`);
  }
  getFeaturedArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl + '/featured');
  }
  getArticleByCategory(category: string): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.baseUrl}/category/${category}`);
  }
  addComent(id: string, comment: Comment) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.put(`${this.baseUrl}/${id}`, comment, {headers});
  }
}
