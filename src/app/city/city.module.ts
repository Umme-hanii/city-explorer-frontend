import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { CityDetailsComponent } from './city-details/city-details.component'
import { CityListComponent } from './city-list/city-list.component'
import { MaterialDesignModule } from '../modules/material-design.module'
import { CityComponent } from './city.component'
import { CityRoutingModule } from './city-routing.module'
import { CityBannerComponent } from './city-banner/city-banner.component'
import { backgroundImageDirective } from '../shared/directives/backgroundImage.directive'

@NgModule({
  declarations: [
    backgroundImageDirective,
    CityDetailsComponent,
    CityListComponent,
    CityComponent,
    CityBannerComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MaterialDesignModule,
    CityRoutingModule,
  ],
})
export class cityModule {}
