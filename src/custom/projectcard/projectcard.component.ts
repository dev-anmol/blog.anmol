import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-projectcard',
  imports: [],
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.css'
})
export class ProjectCardComponent implements OnInit{
  @Input() id !: number;
  @Input() url !:string;
  @Input() dateVal !: string;
  @Input() topic !: string;
  @Input() description !: string;

  ngOnInit() {
    console.log(this.id, this.url, this.dateVal, this.topic, this.description);
  }
}
