import {Component, OnInit} from '@angular/core';
import {SuiModal} from 'ng2-semantic-ui';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  constructor(public modal: SuiModal<void, void>) {  }
  ngOnInit() { }
}
