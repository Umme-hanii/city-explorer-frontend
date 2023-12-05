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
  filteredCities$: Observable<Array<CityInterface>>
  searchResult$: Observable<Array<CityInterface>>

  constructor(private cityService: CityService, private router: Router) {
    this.filteredCities$ = this.cityService.getAllCities().pipe()
    this.searchResult$ = combineLatest([
      this.filteredCities$,
      this.searchValue$,
    ]).pipe(
      map(([cities, searchValue]) => {
        return cities.filter((city) => {
          if (searchValue) {
            return city.name.toLowerCase().includes(searchValue.toLowerCase())
          } else {
            return city
          }
        })
      })
    )
  }

  resetSearch() {
    this.searchValue.setValue('')
  }

  goTo(city: CityInterface): void {
    this.router.navigateByUrl(`cities/${city.name.toLowerCase()}`)
  }
}
