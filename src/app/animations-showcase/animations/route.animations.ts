import { 
  trigger, 
  transition, 
  style, 
  animate, 
  query, 
  group, 
  AnimationTriggerMetadata,
  state,
  stagger,
  keyframes
} from '@angular/animations';

// Route animations
export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ 
        opacity: 0,
        transform: 'translateY(20px)'
      })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({
          opacity: 0,
          transform: 'translateY(-20px)'
        }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ], { optional: true })
    ])
  ])
]);

// Card flip animation
export const flipAnimation = trigger('flipState', [
  state('front', style({
    transform: 'rotateY(0)'
  })),
  state('back', style({
    transform: 'rotateY(180deg)'
  })),
  transition('front => back', [
    animate('0.6s ease-in-out')
  ]),
  transition('back => front', [
    animate('0.6s ease-in-out')
  ])
]);

// Expandable panel animation
export const expandCollapse = trigger('expandCollapse', [
  state('collapsed', style({
    height: '0',
    opacity: 0,
    padding: '0 15px'
  })),
  state('expanded', style({
    height: '*',
    opacity: 1,
    padding: '15px'
  })),
  transition('collapsed <=> expanded', [
    animate('200ms ease-out')
  ])
]);

// Shake animation for error states
export const shakeAnimation = trigger('shake', [
  transition('* => shake', [
    animate('500ms ease-in-out', keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(-10px)', offset: 0.2 }),
      style({ transform: 'translateX(10px)', offset: 0.4 }),
      style({ transform: 'translateX(-10px)', offset: 0.6 }),
      style({ transform: 'translateX(10px)', offset: 0.8 }),
      style({ transform: 'translateX(0)', offset: 1 })
    ]))
  ])
]);

// List item animations with stagger effect
export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      stagger(100, [
        animate('500ms ease-out', style({ 
          opacity: 1, 
          transform: 'translateY(0)' 
        }))
      ])
    ], { optional: true }),
    query(':leave', [
      stagger(100, [
        animate('500ms ease-out', style({ 
          opacity: 0, 
          transform: 'translateY(50px)' 
        }))
      ])
    ], { optional: true })
  ])
]);

// Pulse animation for notifications
export const pulseAnimation = trigger('pulse', [
  transition('* => *', [
    animate('500ms ease-in-out', keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale(1.1)', offset: 0.5 }),
      style({ transform: 'scale(1)', offset: 1 })
    ]))
  ])
]);

// Slide in from different directions
export const slideInFromDirections = {
  left: trigger('slideInLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('300ms ease-out', style({ 
        transform: 'translateX(0)', 
        opacity: 1 
      }))
    ]),
    transition(':leave', [
      animate('300ms ease-in', style({ 
        transform: 'translateX(-100%)', 
        opacity: 0 
      }))
    ])
  ]),
  right: trigger('slideInRight', [
    transition(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('300ms ease-out', style({ 
        transform: 'translateX(0)', 
        opacity: 1 
      }))
    ]),
    transition(':leave', [
      animate('300ms ease-in', style({ 
        transform: 'translateX(100%)', 
        opacity: 0 
      }))
    ])
  ])
};

// Fade in/out with scale
export const fadeScale = trigger('fadeScale', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.95)' }),
    animate('200ms ease-out', style({ 
      opacity: 1, 
      transform: 'scale(1)' 
    }))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ 
      opacity: 0, 
      transform: 'scale(0.95)' 
    }))
  ])
]); 