import { Component, OnInit } from '@angular/core';
import { routerTransition } from './animations/router.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class AppComponent {
  myStyle: object = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'z-index': 0,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'opacity': 0.3
  };
  myParams: object = {
    particles: {
      number: {
        value: 70,
      },
      color: {
        value: '#ff0000'
      },
      shape: {
        type: 'triangle',
      },
    }
  };
  width: number = 100;
  height: number = 100;

  constructor() {
  }
  title = 'app';
  animation = '';

  fadeIn() {
    this.animation = 'fadeIn';
  }
  fadeOut() {
    this.animation = 'fadeOut';
  }
  toggle() {
    console.log(this.animation)
    this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }
}