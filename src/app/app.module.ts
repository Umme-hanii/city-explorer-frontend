import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialDesignModule } from './modules/material-design.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CityComponent } from './city/city.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [AppComponent, NavBarComponent, CityComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
