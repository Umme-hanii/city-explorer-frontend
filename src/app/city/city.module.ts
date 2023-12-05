import { NgModule } from '@angular/core'
import { CityDetailsComponent } from './city-details/city-details.component'
import { CityListComponent } from './city-list/city-list.component'
import { MaterialDesignModule } from '../modules/material-design.module'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { CityComponent } from './city.component'
import { CityRoutingModule } from './city-routing.module'
import { CityBannerComponent } from './city-banner/city-banner.component'

@NgModule({
  declarations: [
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
