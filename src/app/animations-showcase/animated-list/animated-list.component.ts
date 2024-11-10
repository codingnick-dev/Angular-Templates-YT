import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

interface ListItem {
  id: number;
  text: string;
}

@Component({
  selector: 'app-animated-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-list.component.html',
  styleUrls: ['./animated-list.component.scss'],
  animations: [
    trigger('filterAnimation', [
      transition(':increment', [
        query(':enter', [
          style({ 
            opacity: 0, 
            height: 0, 
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0,
            transform: 'translateX(-20px)' 
          }),
          stagger(50, [
            animate('150ms ease-out', 
              style({ 
                height: '*',
                paddingTop: '*',
                paddingBottom: '*',
                marginTop: '*',
                marginBottom: '*'
              })
            ),
            animate('100ms ease-out', 
              style({ 
                opacity: 1,
                transform: 'translateX(0)' 
              })
            )
          ])
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('100ms ease-in', 
              style({ 
                opacity: 0,
                transform: 'translateX(-20px)' 
              })
            ),
            animate('150ms ease-in', 
              style({ 
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0
              })
            )
          ])
        ])
      ])
    ])
  ]
})
export class AnimatedListComponent {
  items: ListItem[] = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ];
  filteredItems: ListItem[] = [...this.items];
  nextId = 4;
  searchTerm = '';

  get containerHeight(): string {
    return `${Math.max(this.filteredItems.length * 63, 63)}px`;
  }

  addItem() {
    const newItem = { id: this.nextId, text: `Item ${this.nextId}` };
    this.items.push(newItem);
    this.nextId++;
    this.filterItems();
  }

  removeItem() {
    if (this.items.length > 0) {
      this.items.pop();
      this.filterItems();
    }
  }

  filterItems() {
    if (!this.searchTerm) {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => 
        item.text.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  onSearchChange(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.filterItems();
  }

  trackByFn(index: number, item: ListItem): number {
    return item.id;
  }
} 