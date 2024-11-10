import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { slideInAnimation } from './animations/route.animations';

@Component({
  selector: 'app-animations-showcase',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './animations-showcase.component.html',
  styleUrls: ['./animations-showcase.component.scss'],
  animations: [slideInAnimation]
})
export class AnimationsShowcaseComponent {
  examples = [
    { path: 'fade', name: 'Fade Animations' },
    { path: 'slide', name: 'Slide Animations' },
    { path: 'stagger', name: 'Stagger Animations' },
    { path: 'route-transitions', name: 'Route Transitions' },
    { path: 'flip-card', name: 'Flip Card' },
    { path: 'expandable-panel', name: 'Expandable Panel' },
    { path: 'animated-list', name: 'Animated List' }
  ];

  prepareRoute(outlet: RouterOutlet | null) {
    if (!outlet || !outlet.isActivated) {
      return 'none';
    }
    return outlet.activatedRoute.url;
  }
} 