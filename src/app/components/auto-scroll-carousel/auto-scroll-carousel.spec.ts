import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoScrollCarousel } from './auto-scroll-carousel';

describe('AutoScrollCarousel', () => {
  let component: AutoScrollCarousel;
  let fixture: ComponentFixture<AutoScrollCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoScrollCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoScrollCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
