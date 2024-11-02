import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImageItem {
  id: number;
  title: string;
  thumbnailUrl: string;
  fullImageUrl: string;
  description: string;
  loaded: boolean;
}

@Component({
  selector: 'app-lazy-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent implements AfterViewInit {
  @ViewChildren('imageContainer') imageContainers!: QueryList<ElementRef>;

  images: ImageItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Image ${i + 1}`,
    // Low quality thumbnail (small size, blurred)
    thumbnailUrl: `https://picsum.photos/10/6?random=${i}`,
    // High quality image (will be loaded when in view)
    fullImageUrl: `https://picsum.photos/800/400?random=${i}`,
    description: `A beautiful random image ${i + 1}`,
    loaded: false
  }));

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const imageId = Number(entry.target.getAttribute('data-image-id'));
          this.loadImage(imageId);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.imageContainers.forEach(container => {
      observer.observe(container.nativeElement);
    });
  }

  private loadImage(imageId: number) {
    const image = this.images.find(img => img.id === imageId);
    if (!image || image.loaded) return;

    // Create a new image object to preload the full image
    const preloadImage = new Image();
    preloadImage.src = image.fullImageUrl;
    
    preloadImage.onload = () => {
      image.loaded = true;
    };
  }
}