import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Article} from '../../Models/article.model';
import {Observable} from 'rxjs/Observable';
import {ArticleService} from '../../Services/article.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: string;
  articles: Observable<Article[]>;
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.category = params.get('categoryId');
      this.articles = this.articleService.getArticleByCategory(this.category);
    });
  }

}
