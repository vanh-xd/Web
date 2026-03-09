import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../myservices/auth-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  errMessage: string = '';

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    const cookieValue = this.getCookie('rememberedUser');
    if (cookieValue) {
      try {
        const userData = JSON.parse(decodeURIComponent(cookieValue));
        this.username = userData.username;
        this.password = userData.password;
      } catch (e) {
        console.error('can not parse cookie', e);
      }
    }
  }
  getCookie(name: string) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop()?.split(";").shift();
    return null;
  }

  submit() {
    this.errMessage = '';
    this.auth.login(this.username, this.password).subscribe((ok) => {
      if (ok) {
        this.router.navigate(['/gioi-thieu']);
      } else {
        this.errMessage = 'Invalid username/password';
      }
    });
  }
}
