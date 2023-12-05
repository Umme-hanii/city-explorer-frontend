import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: 'cities',
    loadChildren: () => import('./city/city.module').then((m) => m.cityModule),
  },
  {
    path: '',
    redirectTo: 'cities',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
