import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

import { environment } from '../../../environments/environment'
import { CityInterface } from '../../shared/types/city.interface'
import { CityService } from '../../shared/services/city.service'

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent implements OnInit {
  cityName: string = ''
  public mapUrl: SafeResourceUrl = ''
  city: CityInterface = {
    name: '',
    latitude: '0',
    longitude: '0',
    landmarks: [],
    name_native: '',
    country: '',
    continent: '',
    population: 0,
    founded: 0,
  }
  selectedLandmark: string = ''

  constructor(
    private sanitizer: DomSanitizer,
    private cityService: CityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cityName = params.get('name') || ''
    })

    //get current city to display city details
    if (this.cityName) {
      this.cityService.getCityByName(this.cityName).subscribe((city) => {
        this.city = city
      })
    }
    this.onTabSelectionChange(0)
  }

  //show picture and map for current landmark
  onTabSelectionChange(tabIndex: number): void {
    if (this.city && this.city.landmarks[tabIndex]) {
      this.selectedLandmark = this.city.landmarks[tabIndex]
      this.mapUrl = this.getMapUrl(this.selectedLandmark)
    }
  }

  getMapUrl(landmark: string): SafeResourceUrl {
    if (this.city) {
      const originParam = `${this.city.latitude},${this.city.longitude}`
      const destinationParam = `${landmark}`
      const queryParams = `origin=${originParam}&destination=${destinationParam}&key=${environment.MAP_API_KEY}`
      const fullUrl = `${environment.MAP_API_URL}?${queryParams}`

      return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl)
    } else {
      console.error('Invalid city data or missing latitude/longitude')
      return ''
    }
  }
}
