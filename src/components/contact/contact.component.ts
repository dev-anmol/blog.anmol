import {AfterViewInit, Component, signal, WritableSignal} from '@angular/core';
import {FormGroup,FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import gsap, { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  email: WritableSignal<string> = signal('anmolll.thakurrr@gmail.com');
  private context !: any;
  signUpForm = new FormGroup({
    name: new FormControl(),
    message: new FormControl(),
    email: new FormControl()
  })

  ngAfterViewInit(): void {
    this.context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline();
      timeline.from('#contact', {
        opacity: 0,
        duration: 0.5,
        filter: 'blur(10px)',
      })
    })
  }


}
