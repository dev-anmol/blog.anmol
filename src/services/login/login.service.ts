import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

type loginRes = {
  token: string;
  isAuthorized: string;
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);

  loginAdmin(username: string, password: string) {
    return this.http.post<loginRes>('http://localhost:5000/login', {
      username : username,
      password : password
    })
  }
}
