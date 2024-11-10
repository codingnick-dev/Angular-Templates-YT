import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-slide-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-animations.component.html',
  styleUrls: ['./slide-animations.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition('void => *', [
        animate('0.3s ease-out')
      ]),
      transition('* => void', [
        animate('0.3s ease-in')
      ])
    ]),
    trigger('slideUpDown', [
      state('void', style({
        transform: 'translateY(20px)',
        opacity: 0
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
export class SlideAnimationsComponent {
  showSlidePanel = false;
  notifications = [
    'New message received',
    'Task completed successfully',
    'System update available'
  ];

  togglePanel() {
    this.showSlidePanel = !this.showSlidePanel;
  }

  removeNotification(index: number) {
    this.notifications.splice(index, 1);
  }

  addNotification() {
    this.notifications.push(`Notification ${this.notifications.length + 1}`);
  }
} 