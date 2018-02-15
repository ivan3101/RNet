import {AfterViewChecked, Component, ViewChild} from '@angular/core';
import {CustomModal} from '../identification/CustomModal';
import {ModalSize, SuiModalService} from 'ng2-semantic-ui';
import {AccessibilityService} from '../../Services/accessibility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewChecked {
  @ViewChild('header') header;
  @ViewChild('menu') menu;
  @ViewChild('menu2') menu2;
  constructor(private modalService: SuiModalService, private accessibilityService: AccessibilityService) { }
  ngAfterViewChecked() {
    this.accessibilityService.accessibilityAct.subscribe(value => {
      if (value) {
        if (this.header.nativeElement.classList.contains('red')) {
          this.header.nativeElement.classList.remove('red');
        }
        if (this.menu.nativeElement.classList.contains('red')) {
          this.menu.nativeElement.classList.remove('red');
        }
        if (this.menu2.nativeElement.classList.contains('red')) {
          this.menu2.nativeElement.classList.remove('red');
        }
      } else {
        if (!this.header.nativeElement.classList.contains('red')) {
          this.header.nativeElement.classList.add('red');
        }
        if (!this.menu.nativeElement.classList.contains('red')) {
          this.menu.nativeElement.classList.add('red');
        }
        if (!this.menu2.nativeElement.classList.contains('red')) {
          this.menu2.nativeElement.classList.add('red');
        }
      }
    });
  }
  onOpenModal() {
    this.modalService
      .open(new CustomModal(ModalSize.Tiny));
  }
}
