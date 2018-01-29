import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() singleNews: News;
  constructor() { }

  ngOnInit() {
  }

}
