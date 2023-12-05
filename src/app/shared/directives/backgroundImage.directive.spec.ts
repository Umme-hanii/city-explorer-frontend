import { By } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Component, DebugElement } from '@angular/core'
import { TestBed, ComponentFixture } from '@angular/core/testing'

import { backgroundImageDirective } from './backgroundImage.directive'

@Component({
  template: '<div backgroundImage [imageName]="imageName"></div>',
})
class TestComponent {
  imageName: string = ''
}

describe('backgroundImageDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let directiveElement: DebugElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, backgroundImageDirective],
      imports: [BrowserAnimationsModule],
    })

    fixture = TestBed.createComponent(TestComponent)
    directiveElement = fixture.debugElement.query(
      By.directive(backgroundImageDirective)
    )
  })

  it('should create the directive', () => {
    expect(directiveElement).toBeTruthy()
  })

  it('should set background image URL when imageName is provided', () => {
    fixture.componentInstance.imageName = 'TestImage'
    fixture.detectChanges()

    const directiveInstance = directiveElement.injector.get(
      backgroundImageDirective
    )
    expect(directiveInstance.imageUrl).toEqual(
      '../../../../assets/images/testimage.jpg'
    )

    const backgroundImage = directiveElement.nativeElement.style.backgroundImage
    expect(backgroundImage).toContain(
      `url("../../../../assets/images/testimage.jpg")`
    )
  })

  it('should not set background image URL when imageName is not provided', () => {
    fixture.componentInstance.imageName = ''
    fixture.detectChanges()

    const directiveInstance = directiveElement.injector.get(
      backgroundImageDirective
    )
    expect(directiveInstance.imageUrl).toEqual(
      '../../../../assets/images/default.jpg'
    )

    const backgroundImage = directiveElement.nativeElement.style.backgroundImage
    expect(backgroundImage).toContain(
      `url("../../../../assets/images/default.jpg")`
    )
  })
})
