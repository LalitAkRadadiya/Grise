import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingmod } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './tokenstats/graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    routingmod,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
