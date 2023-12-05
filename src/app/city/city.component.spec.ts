import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { CityComponent } from './city.component'

describe('CityComponent', () => {
  let component: CityComponent
  let fixture: ComponentFixture<CityComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityComponent],
      imports: [RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(CityComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create city component', () => {
    expect(component).toBeTruthy()
  })
})
