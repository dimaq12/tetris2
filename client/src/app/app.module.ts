import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { GameComponent } from './components/game/game.component';
import { TetrisComponent } from './components/tetris/tetris.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { EffectsModule } from '@ngrx/effects';
import { gameReducer } from './components/state/reducer';

import { TetrisService } from './services/tetris.service';




import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { routes } from './routes';
 
import { customHttpProvider } from './helpers/index';
import { AlertComponent } from './components/alert/index';
import { AuthGuard } from './auth/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/login/index';
import { RegisterComponent } from './components/register/index';
import { CalendarComponent } from './components/calendar/index';
 

@NgModule({
  declarations: [
    AppComponent,
    GameInfoComponent,
    GameComponent,
    TetrisComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    StoreModule.forRoot({gameReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [
    TetrisService,
    customHttpProvider,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
