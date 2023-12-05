import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'
@Directive({
  selector: '[backgroundImage]',
})
export class backgroundImageDirective implements OnInit {
  imageUrl: string = ''
  @Input() imageName: string = 'banner-img'

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.imageName) {
      if (this.imageName.includes(' ')) {
        this.imageName = this.imageName.slice(0, this.imageName.indexOf(' '))
      }
      this.imageUrl =
        '../../../../assets/images/' + this.imageName.toLowerCase() + '.jpg'
    }
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundImage',
      `url(${this.imageUrl})`
    )
  }
}
