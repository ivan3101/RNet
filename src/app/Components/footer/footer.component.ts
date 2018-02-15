import { Component, OnInit } from '@angular/core';
import {AccessibilityService} from '../../Services/accessibility.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  actAccessibility: boolean;
  constructor(private accessibilityService: AccessibilityService) {
    this.actAccessibility = false;
  }

  ngOnInit() {
  }
  onActAccessibility() {
    this.accessibilityService.accessibilityAct.next(true);
    this.actAccessibility = true;
  }
  onDeactAccessibility() {
    this.accessibilityService.accessibilityAct.next(false);
    this.actAccessibility = false;
  }
}
