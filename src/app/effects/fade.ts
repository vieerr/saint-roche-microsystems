// animations.ts
import { 
  trigger, 
  style, 
  animate, 
  transition, 
  query, 
  stagger 
} from '@angular/animations';

export const fadeInUpAnimation = [
  trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('0.6s ease-out', 
        style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]),
  trigger('listFadeInUp', [
    transition(':enter', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger('100ms', [
          animate('0.6s ease-out', 
            style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ], { optional: true })
    ])
  ])
];