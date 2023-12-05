import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NavBarComponent } from './nav-bar.component'
import { MaterialDesignModule } from '../modules/material-design.module'

describe('NavBarComponent', () => {
  let component: NavBarComponent
  let fixture: ComponentFixture<NavBarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [MaterialDesignModule],
    }).compileComponents()

    fixture = TestBed.createComponent(NavBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create navbar component', () => {
    expect(component).toBeTruthy()
  })
})
