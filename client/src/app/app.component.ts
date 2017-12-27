import { Component } from '@angular/core';
import { routerTransition } from './animations/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AppComponent {
  title = 'app';

  bindingVar = '';
  fadeIn() {
    this.bindingVar = 'fadeIn';
  }
  fadeOut() {
    this.bindingVar = 'fadeOut';
  }
  toggle() {
    this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }
}



  