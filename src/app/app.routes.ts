import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/subgrid-demo', pathMatch: 'full' },
  { 
    path: 'subgrid-demo', 
    loadComponent: () => import('./subgrid-demo/subgrid-demo.component')
      .then(m => m.SubgridDemoComponent) 
  },
  { 
    path: 'intersection-demo', 
    loadComponent: () => import('./intersection-observer-demo/intersection-observer-demo.component')
      .then(m => m.IntersectionObserverDemoComponent)
  },
  {
    path: 'enhanced-forms',
    loadComponent: () => import('./enhanced-forms/enhanced-forms.component')
      .then(m => m.EnhancedFormsComponent)
  },
  {
    path: 'container-queries',
    loadComponent: () => import('./container-queries/container-queries.component')
      .then(m => m.ContainerQueriesComponent)
  },
  {
    path: 'modal-examples',
    loadComponent: () => import('./modal-examples/modal-examples.component')
      .then(m => m.ModalExamplesComponent)
  }
];
