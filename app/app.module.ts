import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UsersComponent }  from './users.component';
import { HomeComponent } from './home.component';
import { routing } from './routes';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, UsersComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
