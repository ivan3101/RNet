import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewChecked {
  @ViewChild('link1') link1;
  @ViewChild('link2') link2;
  @ViewChild('link3') link3;
  actAccessibility: boolean;
  constructor() {
    this.actAccessibility = false;
  }
  ngAfterViewChecked() {
    if (sessionStorage.getItem('accessibility')) {
      this.link1.nativeElement.classList.add('accessibility');
      this.link2.nativeElement.classList.add('accessibility');
      this.link3.nativeElement.classList.add('accessibility');
    } else {
      if (this.link1.nativeElement.classList.contains('accessibility')) {
        this.link1.nativeElement.classList.remove('accessibility');
        this.link2.nativeElement.classList.remove('accessibility');
        this.link3.nativeElement.classList.remove('accessibility');
      }
    }
  }
  onAccessibility() {
    if (sessionStorage.getItem('accessibility')) {
      sessionStorage.removeItem('accessibility');
      this.actAccessibility = false;
    } else {
      sessionStorage.setItem('accessibility', 'true');
      this.actAccessibility = true;
    }
  }
}
