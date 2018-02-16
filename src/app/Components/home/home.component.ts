import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../Services/article.service';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals',[
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ]))
        ]), {optional: true} )
      ])
    ])
  ]
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
