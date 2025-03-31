import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-projectcard',
  imports: [],
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.css'
})
export class ProjectCardComponent implements OnInit{
  @Input() id !: number;
  @Input() imgUrl !:string;
  @Input() title !: string;
  @Input() description !: string;
  @Input() projectUrl !: string;

  ngOnInit() {
    console.log(this.id, this.imgUrl, this.title, this.description);
  }
}
