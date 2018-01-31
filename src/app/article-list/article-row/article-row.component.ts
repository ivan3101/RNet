import {Component, Input, OnInit} from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-article-row',
  templateUrl: './article-row.component.html',
  styleUrls: ['./article-row.component.css']
})
export class ArticleRowComponent implements OnInit {
  @Input() article: Article;
  constructor() { }

  ngOnInit() {
  }

}
