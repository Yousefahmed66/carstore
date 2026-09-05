import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [DecimalPipe],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {

  favorites: any[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );
removeFavorite(car: any) {
  this.favorites = this.favorites.filter(
    (item: any) => item.name !== car.name
  );

  localStorage.setItem(
    'favorites',
    JSON.stringify(this.favorites)
  );
}
}