import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CityDetailsComponent } from './city-details/city-details.component'
import { CityListComponent } from './city-list/city-list.component'
import { CityComponent } from './city.component'

const routes: Routes = [
  {
    path: '',
    component: CityComponent,
    children: [
      { path: '', component: CityListComponent },
      { path: ':name', component: CityDetailsComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityRoutingModule {}
