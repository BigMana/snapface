import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandigPageComponent } from './landig-page/landig-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandigPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
