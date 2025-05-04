import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ToastModule
  ],
  templateUrl: './login.component.html',
  providers: [MessageService]
})
export class LoginComponent {
  private router = inject(Router);
  private loginService = inject(LoginService);
  private messageService = inject(MessageService);
  username = signal('');
  password = signal('');

  updateUsername(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.username.set(value);
  }

  updatePassword(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.password.set(value);
  }

  login() {
    this.loginService.loginAdmin(this.username(), this.password()).subscribe(
      {
        next: data => {
          if (Object.values(data).includes('authorized')) {
            this.messageService.add({
              severity: 'success',
              summary: 'Successfully LoggedIn',
              detail: 'lets create blogs:)',
              life: 3000
            })
            setTimeout(() => {
              this.router.navigate(['/create-blog']);
            }, 500);
          }
        },
        error: err => {
          this.messageService.add({
            severity: 'error',
            summary: 'Authentication Failed',
            detail: 'Username or password is incorrect',
            life: 3000,
          });
        }
      });
  }
}
