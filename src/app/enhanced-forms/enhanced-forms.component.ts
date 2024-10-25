import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputmodeExampleComponent } from './inputmode-example/inputmode-example.component';
import { AutocompleteExampleComponent } from './autocomplete-example/autocomplete-example.component';
import { CombinedExampleComponent } from './combined-example/combined-example.component';

@Component({
  selector: 'app-enhanced-forms',
  standalone: true,
  imports: [
    CommonModule,
    InputmodeExampleComponent,
    AutocompleteExampleComponent,
    CombinedExampleComponent
  ],
  templateUrl: './enhanced-forms.component.html',
  styleUrls: ['./enhanced-forms.component.scss']
})
export class EnhancedFormsComponent {}
