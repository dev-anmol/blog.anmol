import {Component} from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  knowledges: string[] = ['Angular', 'React', 'TypeScript', 'Java', 'JavaScript', 'C++', 'Web API', 'NodeJs', 'SQL Server', 'MongoDB', 'PostgreSQL', 'TailwindCSS', 'Git', 'Agile Methodology', 'Prisma', 'Jira']
}
