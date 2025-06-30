import {Component} from '@angular/core';
import {projectsFormat} from '../../models/projects';
import {ProjectCardComponent} from '../../custom/projectcard/projectcard.component';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: projectsFormat[] = [{
    id: 1,
    imgUrl: 'assets/scaneats.png',
    title: 'ScanEats',
    description: 'ScanEats is a QR-based food ordering system that streamlines restaurant dining. Customers simply scan a QR code at their table to view the menu, place orders, and pay—all from their own devices. This contactless solution reduces wait times, minimizes errors, and enhances the overall dining experience while helping restaurants operate more efficiently.',
    techStack: 'Angular, TailwindCSS, SpringBoot, MongoDB',
    projectUrl: 'https://scaneatsqr.netlify.app/'
  }, {
    id: 2,
    imgUrl: 'assets/landingsaas.png',
    title: 'SaaS Landing Page',
    description: 'A dynamic SaaS landing page built with Next.js and enhanced with Framer Motion animations for smooth, engaging user interactions. Designed in Figma and styled with Tailwind CSS for a responsive, modern interface that showcases powerful conversion-optimized sections and seamless visual transitions. The result is a high-performance template that helps SaaS companies effectively communicate their value proposition.',
    techStack: 'React, NextJS, TailwindCSS',
    projectUrl: 'https://landing-page-one-blue-36.vercel.app/'
  }, {
    id: 3,
    imgUrl: 'assets/portfolio.png',
    title: 'Portfolio',
    description: 'A sleek, interactive portfolio crafted with Next.js and enriched with Shadcn UI components for a polished, accessible interface. Framer Motion animations bring the experience to life with subtle, engaging transitions between sections. The Magic UI elements add distinctive visual flair while maintaining performance. This responsive showcase effectively highlights projects and skills through a thoughtfully designed user journey.',
    techStack: 'NextJS, TailwindCSS, Shadcn, MagicUI',
    projectUrl: 'https://portfolio-puce-three-89.vercel.app/'
  }, {
    id: 4,
    imgUrl: 'assets/crypto.png',
    title: 'Crypto & Stock Monitoring Dashboard',
    description: 'A responsive and visually engaging dashboard built with Next.js for tracking cryptocurrencies and stocks in real-time. It features smooth Framer Motion transitions, a clean Shadcn UI layout, and intuitive navigation. Users can access reliable data, gain market insights, and make informed decisions—all in one place.',
    techStack: 'NextJS, TailwindCSS, Framer Motion, TypeScript',
    projectUrl: 'https://crypto-dashboard-ten-ecru.vercel.app/'
  }]
}
