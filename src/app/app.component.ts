import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="main-nav">
      <a routerLink="/subgrid-demo" routerLinkActive="active">Subgrid Examples</a>
      <a routerLink="/intersection-demo" routerLinkActive="active">Intersection Observer</a>
      <a routerLink="/enhanced-forms" routerLinkActive="active">Enhanced Forms</a>
      <a routerLink="/container-queries" routerLinkActive="active">Container Queries</a>
      <a routerLink="/modal-examples" routerLinkActive="active">Modal Examples</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .main-nav {
      display: flex;
      gap: 20px;
      padding: 20px;
      background: #f5f5f5;
      margin-bottom: 20px;

      a {
        padding: 10px 20px;
        text-decoration: none;
        color: #333;
        border-radius: 4px;
        transition: all 0.3s ease;

        &:hover {
          background: #e0e0e0;
        }

        &.active {
          background: #2196f3;
          color: white;
        }
      }
    }

    main {
      padding: 0 20px;
    }
  `]
})
export class AppComponent {}
