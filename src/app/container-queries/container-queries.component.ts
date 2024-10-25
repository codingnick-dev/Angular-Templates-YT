import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { PracticalExampleComponent } from './practical-example/practical-example.component';
import { ContainerUnitsExampleComponent } from './container-units-example/container-units-example.component';
import { AdvancedBusinessCardComponent } from './advanced-business-card/advanced-business-card.component';
import { SizeContainerExampleComponent } from './size-container-example/size-container-example.component';

@Component({
  selector: 'app-container-queries',
  standalone: true,
  imports: [
    CommonModule,
    BasicExampleComponent,
    PracticalExampleComponent,
    ContainerUnitsExampleComponent,
    AdvancedBusinessCardComponent,
    SizeContainerExampleComponent
  ],
  templateUrl: './container-queries.component.html',
  styleUrls: ['./container-queries.component.scss']
})
export class ContainerQueriesComponent {}
