import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../Services/article.service';
import {animate, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles;
  constructor(private articleServie: ArticleService) {  }
  ngOnInit() {
    this.articles = this.articleServie.getAllArticles();
  }
  accAct() {
    return Boolean(sessionStorage.getItem('accessibility'));
  }

}
