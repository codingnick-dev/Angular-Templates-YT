import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-stagger-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stagger-animations.component.html',
  styleUrls: ['./stagger-animations.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        query(':leave', [
          stagger(100, [
            animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('gridAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          stagger(50, [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true }),
        query(':leave', [
          stagger(50, [
            animate('0.3s ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class StaggerAnimationsComponent {
  showList = true;
  showGrid = true;
  listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  gridItems = Array.from({ length: 9 }, (_, i) => `Grid ${i + 1}`);

  toggleList() {
    this.showList = !this.showList;
  }

  toggleGrid() {
    this.showGrid = !this.showGrid;
  }
} 