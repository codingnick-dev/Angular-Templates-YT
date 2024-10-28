import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item/card-item.component';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent {
  cards = [
    {
      image: 'https://picsum.photos/400/300?random=1',
      title: 'Card 1 with a very long title that should wrap',
      description: 'This is the description for card 1. It demonstrates the use of subgrid for consistent layouts.'
    },
    {
      image: 'https://picsum.photos/400/300?random=2',
      title: 'Card 2',
      description: 'This is the description for card 2. The height adjusts automatically based on content.'
    },
    {
      image: 'https://picsum.photos/400/300?random=3',
      title: 'Card 3',
      description: 'This is the description for card 3. Notice how all cards maintain consistent spacing.'
    }
  ];
}
