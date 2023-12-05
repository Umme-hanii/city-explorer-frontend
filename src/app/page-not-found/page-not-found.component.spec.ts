import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PageNotFoundComponent } from './page-not-found.component'
import { MaterialDesignModule } from '../modules/material-design.module'

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent
  let fixture: ComponentFixture<PageNotFoundComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      imports: [MaterialDesignModule],
    }).compileComponents()

    fixture = TestBed.createComponent(PageNotFoundComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create page not found component', () => {
    expect(component).toBeTruthy()
  })
})
