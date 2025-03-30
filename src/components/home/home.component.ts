import {Component} from '@angular/core';
import {techFormat} from '../../models/techFormat';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  techStackFirst: techFormat[] = [{
    id: 1,
    logo: 'assets/javascript.png',
    name: "JavaScript",
    description: "powerful programming language that allows you to implement complex features on web pages",
  }, {
    id: 2,
    logo: 'assets/java.png',
    name: "Java",
    description: "Java is a multiplatform, object-oriented programming language that runs on billions of devices worldwide.",
  }, {
    id: 3,
    logo: 'assets/nodejs.webp',
    name: "Nodejs",
    description: "Efficient server-side platform for building fast, scalable network applications.",
  }, {
    id: 4,
    logo: 'assets/angular.webp',
    name: "Angular",
    description: "Comprehensive framework for dynamic and responsive web app development.",
  }, {
    id: 5,
    logo: 'assets/react.webp',
    name: "React",
    description: "Library for constructing user interfaces with reusable, stateful components.",
  }]

  testStackSecond: techFormat[] = [{
    id: 6,
    logo: 'assets/nextjs.png',
    name: "NextJS",
    description: "powerful and versatile react framework offering features like SSR and SSG",
  }, {
    id: 7,
    logo: 'assets/tailwindcss.webp',
    name: "TailwindCSS",
    description: "Utility-first CSS framework for rapidly building custom designs.",
  }, {
    id: 8,
    logo: 'assets/sql.webp',
    name: "SQL",
    description: "Language for managing and querying relational database systems.",
  }, {
    id: 9,
    logo: 'assets/MongoDB.png',
    name: "MongoDB",
    description: "popular, open-source NoSQL document database that stores data in flexible, JSON-like documents ",
  }, {
    id: 10,
    logo: 'assets/azure.png',
    name: "Azure",
    description: "Cloud computing service for building, testing, deploying, and managing applications.",
  }
  ]
}
