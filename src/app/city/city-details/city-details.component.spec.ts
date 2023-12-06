import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { SecurityContext } from '@angular/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs'

import { backgroundImageDirective } from 'src/app/shared/directives/backgroundImage.directive'
import { CityBannerComponent } from '../city-banner/city-banner.component'
import { CityInterface } from 'src/app/shared/types/city.interface'
import { CityDetailsComponent } from './city-details.component'
import { CityService } from '../../shared/services/city.service'
import { environment } from 'src/environments/environment'
import { MaterialDesignModule } from 'src/app/modules/material-design.module'

xdescribe('CityDetailsComponent', () => {
  let component: CityDetailsComponent
  let fixture: ComponentFixture<CityDetailsComponent>

  const mockCityService = jasmine.createSpyObj<CityService>(['getCityByName'])
  mockCityService.getCityByName.and.callFake((cityName: string) => {
    return of({
      name: cityName,
      latitude: 'mockLatitude',
      longitude: 'mockLongitude',
      landmarks: ['mockLandmark1', 'mockLandmark2'],
      name_native: 'mockNativeName',
      country: 'mockCountry',
      continent: 'mockContinent',
      population: 1000000,
      founded: 1800,
    })
  })

  const mockDomSanitizer = jasmine.createSpyObj<DomSanitizer>([
    'bypassSecurityTrustResourceUrl',
    'sanitize',
  ])

  mockDomSanitizer.sanitize.and.callFake(
    (context: SecurityContext, value: string) => {
      return value
    }
  )
  mockDomSanitizer.bypassSecurityTrustResourceUrl.and.callFake(
    (fullUrl: string) => {
      return 'safeUrl' as SafeResourceUrl
    }
  )
  const mockActivatedRoute = {
    paramMap: of({
      get: (param: string) => 'TestCity',
    }),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CityDetailsComponent,
        CityBannerComponent,
        backgroundImageDirective,
      ],
      imports: [MaterialDesignModule, HttpClientTestingModule],
      providers: [
        { provide: CityService, useValue: mockCityService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: DomSanitizer, useValue: mockDomSanitizer },
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the city details component', fakeAsync(() => {
    component.ngOnInit()
    tick()
    fixture.detectChanges()
    console.log('fixture debugElement', fixture.debugElement)
    console.log('fixture componentInstance', fixture.componentInstance)

    expect(component).toBeTruthy()
  }))
})
