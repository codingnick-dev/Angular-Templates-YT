import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { flipAnimation } from '../animations/route.animations';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  animations: [flipAnimation]
})
export class FlipCardComponent {
  cardState = 'front';

  toggleFlip() {
    this.cardState = this.cardState === 'front' ? 'back' : 'front';
  }
} 
