import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityBannerComponent } from './city-banner.component';

describe('CityBannerComponent', () => {
  let component: CityBannerComponent;
  let fixture: ComponentFixture<CityBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
