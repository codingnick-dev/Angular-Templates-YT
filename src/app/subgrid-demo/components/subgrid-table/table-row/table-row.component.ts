import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-table-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {
  @Input() row!: TableRow;
}
