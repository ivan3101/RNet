import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {ModalSize, SuiModalService} from 'ng2-semantic-ui';
import {CustomModal} from '../identification/CustomModal';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements AfterViewChecked {
  @ViewChild('navbar') navbar;
  constructor(private modalService: SuiModalService) { }
  ngAfterViewChecked() {
    if (sessionStorage.getItem('accessibility')) {
      if (this.navbar.nativeElement.classList.contains('red') || this.navbar.nativeElement.classList.contains('inverted')) {
        this.navbar.nativeElement.classList.remove('inverted');
        this.navbar.nativeElement.classList.remove('red');
      }
    } else {
      this.navbar.nativeElement.classList.add('inverted');
      this.navbar.nativeElement.classList.add('red');
    }
  }
  onOpenModal() {
    this.modalService
      .open(new CustomModal(ModalSize.Mini));
  }
}
