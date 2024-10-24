import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '../shared/safe.pipe';
import { ResponsiveImagesComponent } from './responsive-images/responsive-images.component';

@Component({
  selector: 'app-lazy-loading-example',
  standalone: true,
  imports: [CommonModule, FormsModule, SafePipe, ResponsiveImagesComponent],
  templateUrl: './lazy-loading-example.component.html',
  styleUrls: ['./lazy-loading-example.component.scss']
})
export class LazyLoadingExampleComponent {
    isLazyLoading = true;

    images = [
      { src: 'https://picsum.photos/500/500', alt: 'Random Image 1' },
      { src: 'https://picsum.photos/500/501', alt: 'Random Image 2' },
      { src: 'https://picsum.photos/500/502', alt: 'Random Image 3' },
      { src: 'https://picsum.photos/500/503', alt: 'Random Image 3' },
      { src: 'https://picsum.photos/500/504', alt: 'Random Image 3' },
      { src: 'https://picsum.photos/500/505', alt: 'Random Image 3' },
      { src: 'https://picsum.photos/500/506', alt: 'Random Image 3' },
      { src: 'https://picsum.photos/500/507', alt: 'Random Image 3' },
      { src: 'https://picsum.photos/500/508', alt: 'Random Image 3' },
      { src: 'https://picsum.photos/500/509', alt: 'Random Image 3' },
      { src: 'https://picsum.photos/500/510', alt: 'Random Image 3' },
      { src: 'https://picsum.photos/500/511', alt: 'Random Image 3' },
    ];
  
    iframes = [
      { src: 'https://www.youtube.com/embed/vg1HLBzR-F8', title: 'YouTube Video 1' },
      { src: 'https://www.youtube.com/embed/k8vEVvIx78Q', title: 'YouTube Video 2' },
    ];
  
    toggleLazyLoading() {
      this.isLazyLoading = !this.isLazyLoading;
    }
}
