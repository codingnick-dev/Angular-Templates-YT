import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-fade-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fade-animations.component.html',
  styleUrls: ['./fade-animations.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        animate('0.3s ease-in-out')
      ])
    ]),
    trigger('fadeInOutWithTransform', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.8)'
      })),
      transition('void => *', [
        animate('0.4s ease-out')
      ]),
      transition('* => void', [
        animate('0.4s ease-in')
      ])
    ])
  ]
})
export class FadeAnimationsComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  showElement = false;

  toggleElement() {
    this.showElement = !this.showElement;
  }

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
} 