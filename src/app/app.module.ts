import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CityService } from './shared/services/city.service'
import { MaterialDesignModule } from './modules/material-design.module'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [AppComponent, NavBarComponent, PageNotFoundComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialDesignModule,
  ],
  exports: [MaterialDesignModule],
  providers: [CityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
