import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../state/game.model';

import { User } from '../../models/index';
import { UserService } from '../../services/index';


@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],

})
export class GameComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private store: Store<any>, private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(_id: string) {
    this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }
  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

}