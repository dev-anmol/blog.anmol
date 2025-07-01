import { AfterViewInit, Component, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { techFormat } from '../../models/techFormat';
import { Subject, Subscription } from 'rxjs';
import { ThemeService } from '../../services/themeToggle/theme.service';
import { theme } from '../../models/theme';
import { NgClass } from '@angular/common';
import gsap, { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  techStackFirst: techFormat[] = [
    {
      id: 1,
      logo: 'assets/javascript.png',
      name: 'JavaScript',
      description:
        'powerful programming language that allows you to implement complex features on web pages',
    },
    {
      id: 2,
      logo: 'assets/java.png',
      name: 'Java',
      description:
        'Java is a multiplatform, object-oriented programming language that runs on billions of devices worldwide.',
    },
    {
      id: 3,
      logo: 'assets/nodejs.webp',
      name: 'Nodejs',
      description:
        'Efficient server-side platform for building fast, scalable network applications.',
    },
    {
      id: 4,
      logo: 'assets/angular.webp',
      name: 'Angular',
      description:
        'Comprehensive framework for dynamic and responsive web app development.',
    },
    {
      id: 5,
      logo: 'assets/react.webp',
      name: 'React',
      description:
        'Library for constructing user interfaces with reusable, stateful components.',
    },
  ];

  testStackSecond: techFormat[] = [
    {
      id: 6,
      logo: 'assets/nextjs.png',
      name: 'NextJS',
      description:
        'powerful and versatile react framework offering features like SSR and SSG',
    },
    {
      id: 7,
      logo: 'assets/tailwindcss.webp',
      name: 'TailwindCSS',
      description:
        'Utility-first CSS framework for rapidly building custom designs.',
    },
    {
      id: 8,
      logo: 'assets/sql.webp',
      name: 'SQL',
      description:
        'Language for managing and querying relational database systems.',
    },
    {
      id: 9,
      logo: 'assets/MongoDB.png',
      name: 'MongoDB',
      description:
        'popular, open-source NoSQL document database that stores data in flexible, JSON-like documents ',
    },
    {
      id: 10,
      logo: 'assets/azure.png',
      name: 'Azure',
      description:
        'Cloud computing service for building, testing, deploying, and managing applications.',
    },
  ];
  themeType = signal('dark');
  private subscription!: Subscription;
  private context!: any;
  @ViewChild('description') desRef !: ElementRef;

  ngAfterViewInit(): void {
    this.context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline1 = gsap.timeline();
      const timeline2 = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          scrub: true,
          trigger: '.skill',
          start: 'top 70%',
          end: '+=400px',
        }
      });
      timeline1.from([this.desRef.nativeElement, '.contentType'], {
        opacity: 0,
        duration: 1,
        filter: 'blur(10px)',
      });

      timeline2.from('.skill', {
        opacity: 0,
        duration: 1,
        filter: 'blur(5px)',
      })

    });
  }

  constructor(private theme: ThemeService) {
    this.subscription = this.theme.themeListener$.subscribe((value: theme) => {
      this.themeType.set(value);
    });
  }

  ngOnDestroy(): void {
    this.context.revert();
  }
}
