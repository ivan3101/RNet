import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  sidebarToggle = new Subject();
  constructor() { }

}
