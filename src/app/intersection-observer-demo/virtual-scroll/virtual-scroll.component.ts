import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ListItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-virtual-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('bottomAnchor') bottomAnchor!: ElementRef;

  // Full dataset that grows as we scroll
  private allItems: ListItem[] = [];
  // Currently visible items
  visibleItems: ListItem[] = [];
  
  // Virtual scrolling settings
  private readonly itemHeight = 170;
  private readonly visibleItems_count = 20;
  private readonly bufferItems = 10;
  private currentStartIndex = 0;

  // Infinite scroll settings
  private readonly batchSize = 500;
  private currentBatch = 0;
  private isLoading = false;
  private readonly maxItems = 10000;

  ngOnInit() {
    // Initial batch of data
    this.loadMoreItems();
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
    this.setupScrollHandler();
  }

  private setupIntersectionObserver() {
    const options = {
      root: this.scrollContainer.nativeElement,
      rootMargin: '200px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !this.isLoading) {
        this.loadMoreItems();
      }
    }, options);

    observer.observe(this.bottomAnchor.nativeElement);
  }

  private setupScrollHandler() {
    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      this.updateVisibleItems();
    }, { passive: true });
  }

  private loadMoreItems() {
    if (this.isLoading || this.allItems.length >= this.maxItems) return;
    
    this.isLoading = true;
    const startIndex = this.currentBatch * this.batchSize;
    const endIndex = Math.min(startIndex + this.batchSize, this.maxItems);

    // Simulate API call
    setTimeout(() => {
      const newItems = Array.from({ length: endIndex - startIndex }, (_, i) => ({
        id: startIndex + i,
        title: `Item ${startIndex + i + 1}`,
        image: `https://picsum.photos/200/100?random=${startIndex + i}`,
        description: `This is the description for item ${startIndex + i + 1}.`
      }));

      this.allItems = [...this.allItems, ...newItems];
      this.currentBatch++;
      this.isLoading = false;
      this.updateVisibleItems();
    }, 500);
  }

  private updateVisibleItems() {
    const scrollTop = this.scrollContainer.nativeElement.scrollTop;
    const startIndex = Math.floor(scrollTop / this.itemHeight);
    
    this.currentStartIndex = Math.max(0, startIndex - this.bufferItems);
    const endIndex = Math.min(
      this.allItems.length,
      startIndex + this.visibleItems_count + this.bufferItems
    );

    this.visibleItems = this.allItems.slice(this.currentStartIndex, endIndex);
  }

  getItemStyle(index: number) {
    return {
      position: 'absolute',
      top: `${(this.currentStartIndex + index) * this.itemHeight}px`,
      width: 'calc(100% - 40px)' // Adjust based on your padding
    };
  }

  getContainerHeight(): string {
    return `${this.allItems.length * this.itemHeight}px`;
  }

  trackByFn(index: number, item: ListItem): number {
    return item.id;
  }
} 