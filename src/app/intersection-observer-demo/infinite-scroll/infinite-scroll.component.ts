import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Post {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements AfterViewInit {
  @ViewChild('sentinel') sentinel!: ElementRef;
  
  posts: Post[] = [];
  loading = false;
  page = 1;

  ngAfterViewInit() {
    this.loadInitialPosts();
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.loading) {
          this.loadMorePosts();
        }
      });
    }, options);

    observer.observe(this.sentinel.nativeElement);
  }

  private loadInitialPosts() {
    this.generatePosts(10);
  }

  private loadMorePosts() {
    this.loading = true;
    // Simulate API call
    setTimeout(() => {
      this.generatePosts(5);
      this.loading = false;
      this.page++;
    }, 1500);
  }

  private generatePosts(count: number) {
    const newPosts = Array.from({ length: count }, (_, i) => ({
      id: this.posts.length + i + 1,
      title: `Post ${this.posts.length + i + 1}`,
      content: `This is the content for post ${this.posts.length + i + 1}. It demonstrates infinite scrolling using the Intersection Observer API.`
    }));
    
    this.posts = [...this.posts, ...newPosts];
  }
} 