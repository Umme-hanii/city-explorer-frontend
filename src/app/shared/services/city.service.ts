import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'
import { CityInterface } from '../types/city.interface'

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  getAllCities(): Observable<Array<CityInterface>> {
    return this.http.get<CityInterface[]>(`${environment.API_URL}/all`)
  }

  getCityByName(cityName: string): Observable<CityInterface> {
    const params = new HttpParams().set('name', cityName)

    return this.http.get<CityInterface>(environment.API_URL, { params })
  }
}
