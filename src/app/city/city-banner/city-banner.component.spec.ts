import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'

import { CityBannerComponent } from './city-banner.component'
import { CityInterface } from '../../shared/types/city.interface'

describe('CityBannerComponent', () => {
  let component: CityBannerComponent
  let fixture: ComponentFixture<CityBannerComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityBannerComponent],
      imports: [MatCardModule],
    })

    fixture = TestBed.createComponent(CityBannerComponent)
    component = fixture.componentInstance
  })

  it('should create the city banner component', () => {
    expect(component).toBeTruthy()
  })

  it('should display default banner when city is null', () => {
    component.city = null
    fixture.detectChanges()

    const bannerElement = fixture.nativeElement.querySelector('.banner-card')
    expect(bannerElement).toBeTruthy()

    const titleElement = fixture.nativeElement.querySelector('.title')
    expect(titleElement.textContent).toContain('Explore your dream city')
  })

  it('should display city details banner when city is provided', () => {
    const mockCity: CityInterface = {
      name: 'Mock City',
      continent: 'Mock Continent',
      population: 1000000,
      founded: 1800,
      country: 'Mock Country',
      name_native: 'Mock native',
      latitude: '1234',
      longitude: '5678',
      landmarks: ['landmark1', 'landmark2', 'landmark3'],
    }

    component.city = mockCity
    fixture.detectChanges()

    const bannerElement = fixture.nativeElement.querySelector('.banner-card')
    expect(bannerElement).toBeTruthy()

    const titleElement = fixture.nativeElement.querySelector('.title')
    expect(titleElement.textContent).toContain(
      'Welcome to the vibrant city of Mock City located in Mock Continent'
    )

    const populationElement = fixture.nativeElement.querySelector(
      '.subtitle p:nth-child(1)'
    )
    expect(populationElement.textContent).toContain(
      'With a population of 1000000, Mock City is a bustling metropolis'
    )
  })
})
