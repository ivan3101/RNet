import { Component } from '@angular/core';
import {News} from './news/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  news: News[] = [
    new News(
      'Rafa es marico',
      'Rafa se nos metio a marico. Siempre lo supimos pero aja',
      'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
      ['Rafa', 'marico', 'marico el que lo lea :v']
    ),
    new News(
      'Rafa es marico',
      'Rafa se nos metio a marico. Siempre lo supimos pero aja',
      'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
      ['Rafa', 'marico', 'marico el que lo lea :v']
    ),
    new News(
      'Rafa es marico',
      'Rafa se nos metio a marico. Siempre lo supimos pero aja',
      'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
      ['Rafa', 'marico', 'marico el que lo lea :v']
    )
  ];
}
