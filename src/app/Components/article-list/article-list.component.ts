import { Component, OnInit } from '@angular/core';
import {Article} from '../../Models/article.model';
import {ArticleService} from '../../Services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] =
    [
      new Article(
        1,
        'Rafa es marico',
        '7 de febrero, SpaceX acaba de lanzar con éxito el Falcon Heavy y Elon Musk lo comenta en Twitter. Todo en orden en la vida de Elon, incluso lo de que haya un Tesla Roadster orbitando. Cuando se despacha lo ordinario con maestría, la siguiente meta es lo extraordinario. Entre las miles de respuestas a uno de sus tuits, aparece una en la que el propio Musk anuncia que va a donar 250 ethereums a los 250 primeros que le envíen 0,2 a su cartera, enviándoles un ethereum más los 0,2 de la transacción original.',
        'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
        ['marico el que lo lea :v'],
        []
      ),
      new Article(
        2,
        'Rafa es marico',
        'Rafa se nos metio a marico. Siempre lo supimos pero aja',
        'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
        ['marico el que lo lea :v'],
        []
      ),
      new Article(
        3,
        'Rafa es marico',
        'Rafa se nos metio a marico. Siempre lo supimos pero aja',
        'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
        ['marico el que lo lea :v'],
        []
      ),
      new Article(
        4,
        'Rafa es marico',
        'Rafa se nos metio a marico. Siempre lo supimos pero aja',
        'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
        ['marico el que lo lea :v'],
        []
      ),
      new Article(
        5,
        'Rafa es marico',
        'Rafa se nos metio a marico. Siempre lo supimos pero aja',
        'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
        ['marico el que lo lea :v'],
        []
      ),
      new Article(
        6,
        'Rafa es marico',
        'Rafa se nos metio a marico. Siempre lo supimos pero aja',
        'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
        ['marico el que lo lea :v'],
        []
      ),
      new Article(
        7,
        'Rafa es marico',
        'Rafa se nos metio a marico. Siempre lo supimos pero aja',
        'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
        ['marico el que lo lea :v'],
        []
      ),
      new Article(
        8,
        'Rafa es marico',
        'Rafa se nos metio a marico. Siempre lo supimos pero aja',
        'https://www.ambienteg.com/wp-content/uploads/2016/08/Sexo-gay.jpg',
        ['marico el que lo lea :v'],
        []
      )
    ];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }


}
