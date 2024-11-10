import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'animations-showcase', pathMatch: 'full' },
  { 
    path: 'subgrid-demo', 
    loadComponent: () => import('./subgrid-demo/subgrid-demo.component')
      .then(m => m.SubgridDemoComponent) 
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
  },
  {
    path: 'animations-showcase',
    loadChildren: () => import('./animations-showcase/animations-showcase.routes')
      .then(m => m.ANIMATIONS_ROUTES)
  }
];
