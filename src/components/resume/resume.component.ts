import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap/all';
import { educationFormat } from '../../models/education';
import { experienceFormat } from '../../models/experience';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements AfterViewInit {

  education: educationFormat[] = [{
    id: 1,
    year: '2019-2023',
    courseName: 'Bachelors of Technology - Btech, Computer Science',
    institute: 'Government PG College Dharamshala'
  }, {
    id: 2,
    year: '2017-2019',
    courseName: 'High School, XII, Non-Medical, CBSE',
    institute: 'Kendriya Vidyalaya'
  }, {
    id: 3,
    year: '2015-2016',
    courseName: 'High School, X, CBSE',
    institute: 'Kendriya Vidyalaya'
  }]
  
  experience: experienceFormat[] = [{
    id: 1,
    year: 'May 2024 - Present',
    position: 'Software Developer',
    companyName: 'RightWatts Solutions Pvt Ltd'
  }, {
    id: 2,
    year: 'Mar 2023 - Jun 2023',
    position: 'Full Stack Web Developer Intern',
    companyName: 'Business Web Soltions Pvt Ltd'
  }, {
    id: 3,
    year: 'Aug 2022 - Oct 2022',
    position: 'Web Developer Intern',
    companyName: 'Solitaire Infosys Inc'
  }]
  private context !: any;

  @ViewChild('exp') educationRef !: ElementRef;

  ngAfterViewInit(): void {
    this.context = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.from([this.educationRef.nativeElement], {
        opacity: 0,
        duration: 0.5,
        filter: 'blur(10px)',
      })
    })
  }


}
