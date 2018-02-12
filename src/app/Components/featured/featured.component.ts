import {AfterContentInit, AfterViewChecked, Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from '../../Services/article.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  articles;
  classGrid = ['gl', 'gc', 'gr', 'gl2', 'gr2'];
  imgActive: number;
  constructor(private articleService: ArticleService) {
    this.imgActive = 0;
  }
  ngOnInit() {
    this.articles = this.articleService.getFeaturedArticles();
    this.timeoutImg();
  }
  plusSlides(index: number) {
    if ((this.imgActive + index) > 4) {
      this.imgActive = 0;
    } else if ((this.imgActive + index) < 0) {
      this.imgActive = 4;
    } else {
      this.imgActive = this.imgActive + index;
    }
  }
  timeoutImg() {
    setTimeout(
      () => {
        if ((this.imgActive + 1) > 4) {
          this.imgActive = 0;
        } else {
          this.imgActive = this.imgActive + 1;
        }
        this.timeoutImg();
      }, 8000
    );
  }
  onDotClicked(index: number) {
    this.imgActive = index;
  }
}
