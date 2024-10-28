import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubgridTableComponent } from './components/subgrid-table/subgrid-table.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';

@Component({
  selector: 'app-subgrid-demo',
  standalone: true,
  imports: [CommonModule, SubgridTableComponent, CardGridComponent],
  templateUrl: './subgrid-demo.component.html',
  styleUrls: ['./subgrid-demo.component.scss']
})
export class SubgridDemoComponent {
  tableData = [
    {
      id: 1,
      name: 'John Doe',
      details: {
        email: 'john@example.com',
        phone: '123-456-7890',
        address: '123 Main St'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      details: {
        email: 'jane@example.com',
        phone: '098-765-4321',
        address: '456 Oak Ave'
      }
    }
  ];
}
