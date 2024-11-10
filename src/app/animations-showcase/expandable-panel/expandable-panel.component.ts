import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { expandCollapse } from '../animations/route.animations';

interface Panel {
  title: string;
  content: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-expandable-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expandable-panel.component.html',
  styleUrls: ['./expandable-panel.component.scss'],
  animations: [expandCollapse]
})
export class ExpandablePanelComponent {
  panels: Panel[] = [
    {
      title: 'Panel 1',
      content: 'This is the content for panel 1. Click the header to expand/collapse.',
      isExpanded: false
    },
    {
      title: 'Panel 2',
      content: 'This is the content for panel 2. Each panel animates independently.',
      isExpanded: false
    },
    {
      title: 'Panel 3',
      content: 'This is the content for panel 3. The animation is smooth and natural.',
      isExpanded: false
    }
  ];

  togglePanel(panel: Panel): void {
    panel.isExpanded = !panel.isExpanded;
  }
} 