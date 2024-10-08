import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  @Input() title!: boolean;
  features = [
    {
      title1: '',
      highlight: 'A personalized ',
      title2: 'experienced',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'fet-personalized',
    },
    {
      title1: 'Choose',
      highlight: 'who you learn ',
      title2: 'with',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'fet-learn-with',
    },
    {
      title1: 'Choose what you',
      highlight: 'learn',
      title2: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'fet-learn-what',
    },
    {
      title1: 'Schedule lessons that',
      highlight: 'fit your schedule',
      title2: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'fet-schedule',
    },
    {
      title1: 'Your time, ',
      highlight: ' prioritized',
      title2: '',
      description: 'While there are certain timings that we may suggest that you be available for, you are welcome to set your availability based on your specific schedule',
      image: 'fet-time',
    },
    {
      title1: 'Your',
      highlight: 'lesson',
      title2: ', your way',
      description: "While our team is available for guidance for teaching your clients, you are free to teach whatever will ensure your client's satisfaction.",
      image: 'fet-lesson',
    },
    {
      title1: 'Your',
      highlight: 'income',
      title2: ', in one place',
      description: 'See the history of what you earned for each lesson an an intuitive, transparent way.',
      image: 'fet-income',
    },
  ];
}
