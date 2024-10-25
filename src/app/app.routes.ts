import { Routes } from '@angular/router';
import { ModalExamplesComponent } from './modal-examples/modal-examples.component';
import { LazyLoadingExampleComponent } from './lazy-loading-example/lazy-loading-example.component';
import { EnhancedFormsComponent } from './enhanced-forms/enhanced-forms.component';
import { ContainerQueriesComponent } from './container-queries/container-queries.component';

export const routes: Routes = [
  { path: '', redirectTo: '/modal-examples', pathMatch: 'full' },
  { path: 'modal-examples', component: ModalExamplesComponent },
  { path: 'lazy-loading-example', component: LazyLoadingExampleComponent },
  { path: 'enhanced-forms', component: EnhancedFormsComponent },
  { path: 'container-queries', component: ContainerQueriesComponent }
];
