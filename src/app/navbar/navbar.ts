import { Component } from '@angular/core';
import { RouterLink,Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

currentUser: any = null;
constructor(private router: Router) {
  this.getCurrentUser();
}

getCurrentUser() {
  const user = localStorage.getItem('currentUser');

  if (user) {
    this.currentUser = JSON.parse(user);
  }
}

logout() {
  localStorage.removeItem('currentUser');
  this.currentUser = null;
  this.router.navigate(['/']);
}
}
