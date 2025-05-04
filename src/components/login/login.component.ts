import {Component, inject, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private http = inject(HttpClient);
  private router = inject(Router);
  private loginService = inject(LoginService);
  username  = signal('');
  password = signal('');

  updateUsername(e : Event ){
    const value = (e.target as HTMLInputElement).value;
    this.username.set(value);
  }

  updatePassword(e: Event ) {
    const value = (e.target as HTMLInputElement).value;
    this.password.set(value);
  }

  login() {
    this.loginService.loginAdmin(this.username(), this.password()).subscribe(data => {
      console.log(data);
      if(Object.values(data).includes('authorized')){
        console.log('navigate to login section')
        this.router.navigate(['/create-blog']);
      }
    });

  }
}
