import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-observer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-observer.component.html',
  styleUrls: ['./basic-observer.component.scss']
})
export class BasicObserverComponent implements AfterViewInit {
  @ViewChildren('box') boxes!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    }, options);

    this.boxes.forEach(box => observer.observe(box.nativeElement));
  }
} 