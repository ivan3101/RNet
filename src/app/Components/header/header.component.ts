import {Component, OnInit} from '@angular/core';
import {CustomModal} from '../identification/CustomModal';
import {ModalSize, SuiModalService} from 'ng2-semantic-ui';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private modalService: SuiModalService) { }
  ngOnInit() {  }
  onOpenModal() {
    this.modalService
      .open(new CustomModal(ModalSize.Tiny));
  }
}
