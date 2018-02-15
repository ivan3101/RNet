import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AccessibilityService {
  accessibilityAct = new Subject();
  constructor() { }

}
