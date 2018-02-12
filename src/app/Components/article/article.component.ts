import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../Services/article.service';
import {Article} from '../../Models/article.model';
import {Comment} from '../../Models/comment.model';
import {text} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleId: string;
  article;
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => this.articleId = params.get('articleId'));
    this.articleService.getArticleById(+this.articleId).subscribe(article => this.article = article[0]);
  }
  onAddComment(textarea) {
    console.log(textarea);
    this.article.comments.push(new Comment(
      'Ivan',
      textarea.value,
      new Date(),
      ''
    ));
  }

}
