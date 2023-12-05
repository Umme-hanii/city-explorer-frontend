import { TestBed } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { CityService } from './city.service'
import { environment } from 'src/environments/environment'
import { CityInterface } from '../types/city.interface'
import { HttpRequest } from '@angular/common/http'

fdescribe('CityService', () => {
  let service: CityService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CityService],
    })
    service = TestBed.inject(CityService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    // Ensure that there are no outstanding requests after each test
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get a list of cities', () => {
    const mockCities: CityInterface[] = [
      {
        name: 'City1',
        name_native: 'Native City1',
        country: 'Country1',
        continent: 'Continent1',
        latitude: '123.456',
        longitude: '789.012',
        population: 1000000,
        founded: 1800,
        landmarks: ['Landmark1', 'Landmark2'],
      },
    ]

    service.getAllCities().subscribe((result) => {
      expect(result).toEqual(mockCities)
    })

    const req = httpMock.expectOne(`${environment.API_URL}/all`)
    expect(req.request.method).toBe('GET')

    req.flush(mockCities)
  })

  it('should get a city by name', () => {
    const cityName = 'City1'
    const mockCity: CityInterface = {
      name: cityName,
      name_native: 'Native City1',
      country: 'Country1',
      continent: 'Continent1',
      latitude: '123.456',
      longitude: '789.012',
      population: 1000000,
      founded: 1800,
      landmarks: ['Landmark1', 'Landmark2'],
    }

    service.getCityByName(cityName).subscribe((result) => {
      expect(result).toEqual(mockCity)
      expect(result.name).toEqual(cityName)
    })

    const req = httpMock.expectOne((request: HttpRequest<any>) => {
      return (
        request.method === 'GET' &&
        request.url === `${environment.API_URL}` &&
        request.params.get('name') === cityName
      )
    }, `GET city by name '${cityName}'`)

    req.flush(mockCity)
  })
})
