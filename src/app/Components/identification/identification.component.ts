import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';
import {IContext} from '../../Interfaces/icontext.interface';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  @ViewChild('modalTemplate') public modalTemplate: ModalTemplate<IContext, string, string>;
  constructor(public modalService: SuiModalService) { }

  ngOnInit() {
  }
  public open(dynamicContent: string = 'Example') {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = 'closed!';
    config.context = { data: dynamicContent };

    this.modalService
      .open(config)
      .onApprove(result => { /* approve callback */ })
      .onDeny(result => { /* deny callback */});
  }

}
