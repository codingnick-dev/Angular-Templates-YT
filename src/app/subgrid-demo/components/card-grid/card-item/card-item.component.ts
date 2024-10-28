import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() card!: Card;
}
