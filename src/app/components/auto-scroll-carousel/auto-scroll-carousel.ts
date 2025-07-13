import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-auto-scroll-carousel',
  templateUrl: './auto-scroll-carousel.html',
  styleUrls: ['./auto-scroll-carousel.css']
})
export class AutoScrollCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel') carousel!: ElementRef<HTMLElement>;
  @ViewChild('carouselInner') carouselInner!: ElementRef<HTMLElement>;
  
  items = [
    { image: 'pc.png' },
    { image: 'pc.png' },
    { image: 'pc.png' },
    { image: 'pc.png' }
  ];
  
  private intervalId: any;
  private currentIndex = 0;
  private isPaused = false;
  private scrollBehavior: ScrollBehavior = 'smooth';

  ngAfterViewInit() {
    this.startAutoScroll();
    // Initialize first slide position
    this.scrollToCurrentIndex();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.scrollToCurrentIndex();
      }
    }, 3000); // 3 seconds interval
  }

  stopAutoScroll() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private scrollToCurrentIndex() {
    const carouselWidth = this.carousel.nativeElement.offsetWidth;
    const scrollPosition = this.currentIndex * carouselWidth;
    
    this.carouselInner.nativeElement.scrollTo({
      left: scrollPosition,
      behavior: this.scrollBehavior
    });
  }

  // Pause on hover
  @HostListener('mouseenter')
  onMouseEnter() {
    this.isPaused = true;
    this.scrollBehavior = 'auto'; // Make scroll instant when user interacts
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isPaused = false;
    this.scrollBehavior = 'smooth'; // Restore smooth scrolling
  }
}