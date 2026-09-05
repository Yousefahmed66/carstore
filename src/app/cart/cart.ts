import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [DatePipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartItems: any[] = JSON.parse(
    localStorage.getItem('cart') || '[]'
  );
totalPrice = 0;
invoiceDate = new Date();
constructor() {this.calculateTotal();}

calculateTotal() {

  this.totalPrice = this.cartItems.reduce(
    (total, item) =>
      total + (item.price * (item.quantity || 1)),
    0
  );
}
checkout() {
  alert(
    `Order confirmed successfully!\n\nTotal: $${this.totalPrice}`
  );
}
increaseQuantity(car: any) {

  const cart = JSON.parse(
    localStorage.getItem('cart') || '[]'
  );

  const carIndex = cart.findIndex(
    (item: any) => item.name === car.name
  );

  if (carIndex !== -1) {

    cart[carIndex].quantity++;

  }

  localStorage.setItem(
    'cart',
    JSON.stringify(cart)
  );

  this.cartItems = cart;

  this.calculateTotal();
}


decreaseQuantity(car: any) {

  const cart = JSON.parse(
    localStorage.getItem('cart') || '[]'
  );

  const carIndex = cart.findIndex(
    (item: any) => item.name === car.name
  );

  if (carIndex !== -1) {

    if (cart[carIndex].quantity > 1) {

      cart[carIndex].quantity--;

    } else {

      cart.splice(carIndex, 1);

    }

  }

  localStorage.setItem(
    'cart',
    JSON.stringify(cart)
  );

  this.cartItems = cart;

  this.calculateTotal();
}
removecart(car: any) {
  const cart = JSON.parse(
    localStorage.getItem('cart') || '[]'
  );

  const carIndex = cart.findIndex(
    (item: any) => item.name === car.name
  );

  if (carIndex !== -1) {
    cart.splice(carIndex, 1);
  }

  localStorage.setItem(
    'cart',
    JSON.stringify(cart)
  );

  this.cartItems = cart;

  this.calculateTotal();
}
}