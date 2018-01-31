import { Component, OnInit } from '@angular/core';
import {Article} from './article-row/article/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [
    new Article(
      1,
      'Rafa es marico',
      'Rafa se nos metio a marico. Siempre lo supimos pero aja',
      'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
      ['Rafa', 'marico', 'marico el que lo lea :v']
    ),
    new Article(
      2,
      'Rafa es marico',
      'Rafa se nos metio a marico. Siempre lo supimos pero aja',
      'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
      ['Rafa', 'marico', 'marico el que lo lea :v']
    ),
    new Article(
      3,
      'Rafa es marico',
      'Rafa se nos metio a marico. Siempre lo supimos pero aja',
      'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
      ['Rafa', 'marico', 'marico el que lo lea :v']
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
