import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../Services/article.service';
import {Article} from '../../Models/article.model';
import {Comment} from '../../Models/comment.model';
import {text} from '@angular/core/src/render3/instructions';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleId: string;
  article;
  commentsForm: FormGroup;
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }
  ngOnInit() {
    this.commentsForm = new FormGroup({
      'comment': new FormControl(null, [Validators.required])
    });
    this.route.paramMap.subscribe((params: Params) => {
      this.articleId = params.get('articleId');
      this.articleService.getArticleById(+this.articleId).subscribe(article => this.article = article[0]);
    });
  }
  onAddComment() {
    this.article.comments.push(new Comment(
      'Rafael',
      this.commentsForm.value.comment,
      new Date(),
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    ));
    this.commentsForm.reset();
  }

}
