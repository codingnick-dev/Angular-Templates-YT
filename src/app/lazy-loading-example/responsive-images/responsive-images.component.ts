import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive-images.component.html',
  styleUrls: ['./responsive-images.component.scss']
})
export class ResponsiveImagesComponent {
  images = [
    {
      src: 'https://picsum.photos/400/300',
      srcset: 'https://picsum.photos/200/150 200w, https://picsum.photos/400/300 400w, https://picsum.photos/800/600 800w',
      sizes: '(max-width: 300px) 200px, (max-width: 500px) 400px, 800px',
      alt: 'Responsive Image 1'
    },
    {
      src: 'https://picsum.photos/401/301',
      srcset: 'https://picsum.photos/201/151 200w, https://picsum.photos/401/301 400w, https://picsum.photos/801/601 800w',
      sizes: '(max-width: 600px) 200px, (max-width: 1200px) 400px, 800px',
      alt: 'Responsive Image 2'
    }
  ];
}
