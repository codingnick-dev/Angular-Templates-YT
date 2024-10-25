import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCardComponent } from '../business-card/business-card.component';

@Component({
  selector: 'app-advanced-business-card',
  standalone: true,
  imports: [CommonModule, BusinessCardComponent],
  templateUrl: './advanced-business-card.component.html',
  styleUrls: ['./advanced-business-card.component.scss']
})
export class AdvancedBusinessCardComponent {
  businessInfos = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://picsum.photos/100/100?random=1',
      description: 'Innovative software solutions for modern businesses',
      establishedYear: '2010',
      stats: [
        { label: 'Projects', value: 150 },
        { label: 'Clients', value: 75 },
        { label: 'Years', value: 10 }
      ],
      contact: {
        email: 'info@techcorp.com',
        phone: '+1 (555) 123-4567',
        address: '123 Tech Street, Silicon Valley, CA 94000'
      },
      gridSpan: { column: 2, row: 1 }
    },
    {
      name: 'Green Energy Co.',
      logo: 'https://picsum.photos/100/100?random=2',
      description: 'Sustainable energy solutions for a greener future',
      establishedYear: '2015',
      stats: [
        { label: 'Projects', value: 80 },
        { label: 'Clients', value: 40 },
        { label: 'Years', value: 5 }
      ],
      contact: {
        email: 'info@greenenergy.com',
        phone: '+1 (555) 987-6543',
        address: '456 Eco Avenue, Portland, OR 97201'
      },
      gridSpan: { column: 1, row: 2 }
    },
    {
      name: 'FinTech Innovations',
      logo: 'https://picsum.photos/100/100?random=3',
      description: 'Cutting-edge financial technology solutions',
      establishedYear: '2018',
      stats: [
        { label: 'Projects', value: 50 },
        { label: 'Clients', value: 30 },
        { label: 'Years', value: 3 }
      ],
      contact: {
        email: 'info@fintechinno.com',
        phone: '+1 (555) 246-8135',
        address: '789 Finance Street, New York, NY 10004'
      },
      gridSpan: { column: 1, row: 1 }
    },
    {
      name: 'HealthTech Systems',
      logo: 'https://picsum.photos/100/100?random=4',
      description: 'Advanced healthcare technology solutions',
      establishedYear: '2012',
      stats: [
        { label: 'Projects', value: 120 },
        { label: 'Clients', value: 60 },
        { label: 'Years', value: 8 }
      ],
      contact: {
        email: 'info@healthtech.com',
        phone: '+1 (555) 369-2580',
        address: '321 Medical Lane, Boston, MA 02115'
      },
      gridSpan: { column: 2, row: 1 }
    },
    {
      name: 'AI Research Lab',
      logo: 'https://picsum.photos/100/100?random=5',
      description: 'Pioneering artificial intelligence research and applications',
      establishedYear: '2019',
      stats: [
        { label: 'Projects', value: 30 },
        { label: 'Patents', value: 15 },
        { label: 'Years', value: 2 }
      ],
      contact: {
        email: 'info@airesearch.com',
        phone: '+1 (555) 789-0123',
        address: '567 Innovation Blvd, San Francisco, CA 94105'
      },
      gridSpan: { column: 1, row: 1 }
    },
    {
      name: 'Cyber Security Experts',
      logo: 'https://picsum.photos/100/100?random=6',
      description: 'Protecting digital assets with cutting-edge security solutions',
      establishedYear: '2014',
      stats: [
        { label: 'Clients', value: 200 },
        { label: 'Threats Blocked', value: '1M+' },
        { label: 'Years', value: 7 }
      ],
      contact: {
        email: 'info@cybersecure.com',
        phone: '+1 (555) 321-7890',
        address: '890 Firewall Street, Austin, TX 78701'
      },
      gridSpan: { column: 1, row: 1 }
    }
  ];
}
