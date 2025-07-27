import { Component, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: WritableSignal<string> = signal('anmolll.thakurrr@gmail.com');
  private context !: any;
  signUpForm = new FormGroup({
    name: new FormControl(),
    message: new FormControl(),
    email: new FormControl()
  })

}
