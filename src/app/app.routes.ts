import { Routes } from '@angular/router';
import { ModalExamplesComponent } from './modal-examples/modal-examples.component';

export const routes: Routes = [
  { path: '', redirectTo: '/modal-examples', pathMatch: 'full' },
  { path: 'modal-examples', component: ModalExamplesComponent }
];
