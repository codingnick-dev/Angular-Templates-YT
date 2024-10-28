import { Routes } from '@angular/router';
import { ModalExamplesComponent } from './modal-examples/modal-examples.component';
import { LazyLoadingExampleComponent } from './lazy-loading-example/lazy-loading-example.component';
import { EnhancedFormsComponent } from './enhanced-forms/enhanced-forms.component';
import { ContainerQueriesComponent } from './container-queries/container-queries.component';

export const routes: Routes = [
  { path: '', redirectTo: '/subgrid-demo', pathMatch: 'full' },
  { path: 'subgrid-demo', loadComponent: () => import('./subgrid-demo/subgrid-demo.component').then(m => m.SubgridDemoComponent) }
];
