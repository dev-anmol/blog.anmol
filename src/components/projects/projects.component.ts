import { Component } from '@angular/core';
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
    img: '',
    dateVal: new Date().toLocaleDateString(),
    topic: 'Angular',
    description: 'rxjs and global state management',
  },{
    id: 1,
    img: '',
    dateVal: new Date().toLocaleDateString(),
    topic: 'Angular',
    description: 'rxjs and global state management',
  },{
    id: 1,
    img: '',
    dateVal: new Date().toLocaleDateString(),
    topic: 'Angular',
    description: 'rxjs and global state management',
  }]
}
