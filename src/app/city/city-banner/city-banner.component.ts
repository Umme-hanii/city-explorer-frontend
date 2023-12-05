import { Component, Input, OnInit } from '@angular/core'
import { CityInterface } from '../../shared/types/city.interface'

@Component({
  selector: 'app-city-banner',
  templateUrl: './city-banner.component.html',
  styleUrls: ['./city-banner.component.scss'],
})
export class CityBannerComponent implements OnInit {
  @Input() city: CityInterface | null = null
  constructor() {}

  ngOnInit(): void {}
}
