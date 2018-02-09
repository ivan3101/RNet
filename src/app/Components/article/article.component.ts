import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../Services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleId: string;
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => this.articleId = params.get('articleId'));
  }

}
