import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  email = '';
  password = '';
  errorMessage = '';

  login() {

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (u: any) =>
        u.email === this.email &&
        u.password === this.password
    );

    if (user) {

  localStorage.setItem('currentUser', JSON.stringify(user));

  this.errorMessage = '';

  alert('Login successful!');

  window.location.href = '/';

} 
    else {

      this.errorMessage = 'Invalid email or password';

    }
  }
}