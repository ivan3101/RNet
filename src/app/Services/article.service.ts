import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Article} from '../Models/article.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ArticleService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = './assets/data/articles.json';
  }
  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl);
  }
  getArticleById(id: number): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl)
      .map((value) => {
        return value.filter(item => item.id === id);
      });
  }
  getFeaturedArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl)
      .map(value => {
        return value.filter(item => item.featured);
      });
  }
  getArticleByCategory(category: string): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl)
      .map(value => {
        return value.filter(item => item.category === category);
      });
  }
}
