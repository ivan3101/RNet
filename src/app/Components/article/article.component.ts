import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../Services/article.service';
import {Article} from '../../Models/article.model';
import {Comment} from '../../Models/comment.model';
import {text} from '@angular/core/src/render3/instructions';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../Models/user.model';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {
  articleId: string;
  article;
  commentsForm: FormGroup;
  user: User;
  sessionSubscription: Subscription;
  constructor(private route: ActivatedRoute, private articleService: ArticleService, private userService: UserService) { }
  ngOnInit() {
    this.commentsForm = new FormGroup({
      'comment': new FormControl(null, [Validators.required])
    });
    this.route.paramMap.subscribe((params: Params) => {
      this.articleId = params.get('articleId');
      this.articleService.getArticleById(this.articleId).subscribe(article => this.article = article);
    });
    this.sessionSubscription = this.userService.session.subscribe(value => {
      this.user = JSON.parse(localStorage.getItem('user'));
    });
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  ngOnDestroy() {
    this.sessionSubscription.unsubscribe();
  }
  onAddComment() {
    const comment = new Comment(
      this.user._id,
      this.commentsForm.value.comment,
      new Date(),
    );
    this.articleService.addComent(this.articleId, comment).subscribe(value => {
      comment.author = {
        'fullName': this.user.fullName,
        'imageUrl': this.user.imageUrl
      };
      this.article.comments.push(comment);
      this.commentsForm.reset();

    });
  }
  accAct() {
    return Boolean(sessionStorage.getItem('accessibility'));
  }
}
