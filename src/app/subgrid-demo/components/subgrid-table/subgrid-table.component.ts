import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowComponent } from './table-row/table-row.component';

interface TableRow {
  id: number;
  name: string;
  details: {
    email: string;
    phone: string;
    address: string;
  };
}

@Component({
  selector: 'app-subgrid-table',
  standalone: true,
  imports: [CommonModule, TableRowComponent],
  templateUrl: './subgrid-table.component.html',
  styleUrls: ['./subgrid-table.component.scss']
})
export class SubgridTableComponent {
  @Input() data: TableRow[] = [];
}
