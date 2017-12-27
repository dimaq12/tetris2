import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../state/game.model';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class GameComponent implements OnInit {
  constructor(private store: Store<any>) {
  }
  ngOnInit() {

  }

}



