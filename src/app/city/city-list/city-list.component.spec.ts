import { By } from '@angular/platform-browser'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { backgroundImageDirective } from 'src/app/shared/directives/backgroundImage.directive'
import { AppRoutingModule } from '../../app-routing.module'
import { CityBannerComponent } from '../city-banner/city-banner.component'
import { CityListComponent } from './city-list.component'
import { CityRoutingModule } from '../city-routing.module'
import { CityService } from '../../shared/services/city.service'
import { MaterialDesignModule } from '../../modules/material-design.module'
import { of } from 'rxjs'

describe('CityListComponent', () => {
  let component: CityListComponent
  let fixture: ComponentFixture<CityListComponent>

  const mockCityService = jasmine.createSpyObj<CityService>(['getAllCities'])

  mockCityService.getAllCities.and.callFake(() => {
    return of([
      {
        name: 'test city name',
        latitude: 'mockLatitude',
        longitude: 'mockLongitude',
        landmarks: ['mockLandmark1', 'mockLandmark2'],
        name_native: 'mockNativeName',
        country: 'mockCountry',
        continent: 'mockContinent',
        population: 1000000,
        founded: 1800,
      },
    ])
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CityListComponent,
        CityBannerComponent,
        backgroundImageDirective,
      ],
      imports: [
        MaterialDesignModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        CityRoutingModule,
        AppRoutingModule,
      ],
      providers: [{ provide: CityService, useValue: mockCityService }],
    }).compileComponents()

    fixture = TestBed.createComponent(CityListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create city list component', () => {
    expect(component).toBeTruthy()

    expect(fixture.debugElement.query(By.css('.city-list-view'))).toBeTruthy()
  })

  it('should fetch cities on initialization', () => {
    expect(mockCityService.getAllCities).toHaveBeenCalled()
  })

  it('should filter cities based on search value', () => {
    const searchValue = 'test'
    component.searchValue.setValue(searchValue)

    component.searchResult$.subscribe((result) => {
      expect(result.length).toBe(1)
      expect(result[0].name).toBe('test city name')
    })
  })

  it('should reset search value', () => {
    const searchValue = 'test'
    component.searchValue.setValue(searchValue)

    component.resetSearch()

    component.searchResult$.subscribe((result) => {
      expect(result.length).toBe(1)
    })
  })
})
