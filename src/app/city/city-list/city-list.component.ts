import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { Observable, combineLatest } from 'rxjs'
import { map, startWith } from 'rxjs/operators'

import { CityInterface } from '../../shared/types/city.interface'
import { CityService } from '../../shared/services/city.service'

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent {
  searchValue = new FormControl('')
  searchValue$ = this.searchValue.valueChanges.pipe(startWith(''))

  searchResult$: Observable<Array<CityInterface>> = combineLatest([
    this.searchValue$,
    this.cityService.getAllCities(),
  ]).pipe(
    map(([searchValue, cities]) => {
      return cities.filter((city) => {
        return searchValue
          ? city.name.toLowerCase().includes(searchValue.toLowerCase())
          : city
      })
    })
  )

  constructor(private cityService: CityService, private router: Router) {}

  resetSearch() {
    this.searchValue.setValue('')
  }

  goTo(city: CityInterface): void {
    this.router.navigateByUrl(`cities/${city.name.toLowerCase()}`)
  }
}
