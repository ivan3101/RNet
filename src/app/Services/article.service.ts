import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Article} from '../Models/article.model';

@Injectable()
export class ArticleService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = '../data/articles.json';
  }
  getArticles() {
    return this.httpClient.get(this.baseUrl);
  }

}
