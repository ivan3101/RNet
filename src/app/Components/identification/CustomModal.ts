import {ComponentModalConfig, ModalSize} from 'ng2-semantic-ui';
import {IdentificationComponent} from './identification.component';

export class CustomModal extends ComponentModalConfig<void, void, void> {
  constructor(size = ModalSize.Mini) {
    super(IdentificationComponent);
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}
