import {Component} from '@angular/core';
import {routerTransition} from './Animations/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent {
  constructor() {  }
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
