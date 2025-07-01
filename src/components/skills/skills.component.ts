import {AfterViewInit, Component} from '@angular/core';
import gsap, { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  knowledges: string[] = ['Angular', 'React', 'TypeScript', 'Java', 'JavaScript', 'C++', 'Web API', 'NodeJs', 'SQL Server', 'MongoDB', 'PostgreSQL', 'TailwindCSS', 'Git', 'Agile Methodology', 'Prisma', 'Jira']
  private context !: any;

  ngAfterViewInit() : void {
    this.context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline();
      timeline.from('#skills', {
        opacity: 0,
        duration: 0.5,
        filter: 'blur(10px)',
      })
    })
  }
  
  
}
