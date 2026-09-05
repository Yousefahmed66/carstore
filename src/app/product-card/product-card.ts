import { Component, Input, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Car } from '../car';
@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard implements OnInit {

@Input() car!: Car;
  isFavorite = false;

  ngOnInit() {
    const favorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );

    this.isFavorite = favorites.some(
      (car: any) => car.name === this.car.name
    );
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;

    let favorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );

    if (this.isFavorite) {
      favorites.push(this.car);
    } else {
      favorites = favorites.filter(
        (car: any) => car.name !== this.car.name
      );
    }

    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites)
    );
  }
addToCart() {
  const cart = JSON.parse(
    localStorage.getItem('cart') || '[]'
  );

  const carIndex = cart.findIndex(
    (car: any) => car.name === this.car.name
  );

  if (carIndex === -1) {

    cart.push({
      ...this.car,
      quantity: 1
    });

  } else {

    cart[carIndex].quantity =
      (cart[carIndex].quantity || 1) + 1;

  }

  localStorage.setItem(
    'cart',
    JSON.stringify(cart)
  );
}
}