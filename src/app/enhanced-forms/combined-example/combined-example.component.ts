import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-combined-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './combined-example.component.html',
  styleUrls: ['./combined-example.component.scss']
})
export class CombinedExampleComponent {}
