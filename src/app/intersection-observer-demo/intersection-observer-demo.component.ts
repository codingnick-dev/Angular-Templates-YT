import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicObserverComponent } from './basic-observer/basic-observer.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

@Component({
  selector: 'app-intersection-observer-demo',
  standalone: true,
  imports: [
    CommonModule,
    BasicObserverComponent,
    LazyLoadingComponent,
    InfiniteScrollComponent,
    VirtualScrollComponent
  ],
  templateUrl: './intersection-observer-demo.component.html',
  styleUrls: ['./intersection-observer-demo.component.scss']
})
export class IntersectionObserverDemoComponent {} 