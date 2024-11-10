import { Routes } from '@angular/router';
import { AnimationsShowcaseComponent } from './animations-showcase.component';

export const ANIMATIONS_ROUTES: Routes = [
  {
    path: '',
    component: AnimationsShowcaseComponent,
    children: [
      {
        path: 'fade',
        loadComponent: () => import('./fade-animations/fade-animations.component')
          .then(m => m.FadeAnimationsComponent)
      },
      {
        path: 'slide',
        loadComponent: () => import('./slide-animations/slide-animations.component')
          .then(m => m.SlideAnimationsComponent)
      },
      {
        path: 'stagger',
        loadComponent: () => import('./stagger-animations/stagger-animations.component')
          .then(m => m.StaggerAnimationsComponent)
      },
      {
        path: 'route-transitions',
        loadComponent: () => import('./route-transitions/route-transitions.component')
          .then(m => m.RouteTransitionsComponent)
      },
      {
        path: 'flip-card',
        loadComponent: () => import('./flip-card/flip-card.component')
          .then(m => m.FlipCardComponent)
      },
      {
        path: 'expandable-panel',
        loadComponent: () => import('./expandable-panel/expandable-panel.component')
          .then(m => m.ExpandablePanelComponent)
      },
      {
        path: 'animated-list',
        loadComponent: () => import('./animated-list/animated-list.component')
          .then(m => m.AnimatedListComponent)
      },
      { path: '', redirectTo: 'fade', pathMatch: 'full' }
    ]
  }
]; 