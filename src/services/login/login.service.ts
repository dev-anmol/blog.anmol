import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);

  loginAdmin(username: string, password: string) {
    return this.http.post('http://localhost:5000/login', {
      username : username,
      password : password
    })
  }
}
