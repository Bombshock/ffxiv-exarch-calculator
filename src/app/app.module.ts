import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentlyShownComponent } from './components/currently-shown/currently-shown.component';
import { ItemNamePipe } from './pipes/item-name.pipe';
import { environment } from 'src/environments/environment';
import { APP_BASE_HREF } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

@NgModule( {
  declarations: [
    AppComponent,
    CurrentlyShownComponent,
    ItemNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: environment.APP_BASE_HREF } ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
