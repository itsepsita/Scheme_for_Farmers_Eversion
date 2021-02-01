import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerPageComponent } from './farmer-page/farmer-page.component';
import { PlacerequestComponent } from './placerequest/placerequest.component';
import { ViewHistComponent } from './view-hist/view-hist.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerPageComponent,
    PlacerequestComponent,
    ViewHistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
