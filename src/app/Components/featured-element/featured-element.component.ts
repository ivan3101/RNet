import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-featured-element',
  templateUrl: './featured-element.component.html',
  styleUrls: ['./featured-element.component.css']
})
export class FeaturedElementComponent implements OnInit {
  isDimmed = false;
  @Input() articleFeatured;
  constructor() { }
  ngOnInit() { }
  accAct() {
    return Boolean(sessionStorage.getItem('accessibility'));
  }
}
