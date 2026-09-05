import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';
  successMessage = '';

  register() {

    this.errorMessage = '';
    this.successMessage = '';

    if (
      !this.name ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const users = JSON.parse(
      localStorage.getItem('users') || '[]'
    );

    const existingUser = users.find(
      (user: any) => user.email === this.email
    );

    if (existingUser) {
      this.errorMessage = 'This email is already registered.';
      return;
    }

    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    users.push(newUser);

    localStorage.setItem(
      'users',
      JSON.stringify(users)
    );

    this.successMessage = 'Registration successful!';

    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}