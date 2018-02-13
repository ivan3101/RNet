import { Component, OnInit } from '@angular/core';
import {ModalSize, SuiModalService} from 'ng2-semantic-ui';
import {CustomModal} from '../identification/CustomModal';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {
  constructor(private modalService: SuiModalService) { }
  ngOnInit() { }
  onOpenModal() {
    this.modalService
      .open(new CustomModal(ModalSize.Mini));
  }
}
