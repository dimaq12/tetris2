import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as GameActions from './actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { TetrisService } from '../../services/tetris.service';



@Injectable()
export class MainEffects {
    constructor(private action$: Actions,  private tetrisService: TetrisService) {

    }
    @Effect() update$ = this.action$
        .ofType("PAUSE_GAME")
        .map(toPayload)
        .switchMap(item => {
            console.log('hey')
            this.tetrisService.restartGame()
            return Observable.of({type: "UPDATE_LEVEL", payload: {pause:  true}})
        });
}