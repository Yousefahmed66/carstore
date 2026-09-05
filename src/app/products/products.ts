import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { FormsModule } from '@angular/forms';
import { cars as carList } from '../cars';
@Component({
  selector: 'app-products',
  imports: [ProductCard, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  cars = carList;
  originalCars = [...this.cars];
  searchText = '';
  searchCars() {

  const search = this.searchText.toLowerCase().trim();

  if (!search) {
    this.cars = [...this.originalCars];
    return;
  }

  this.cars = this.originalCars.filter(car =>
    car.name.toLowerCase().includes(search) ||
    car.info.toLowerCase().includes(search)
  );
}
  sortCars(event: Event) {
  const value = (event.target as HTMLSelectElement).value;

  if (value === 'low') {
    this.cars.sort((a, b) => a.price - b.price);
  }

  else if (value === 'high') {
    this.cars.sort((a, b) => b.price - a.price);
  }

  else if (value === 'name') {
    this.cars.sort((a, b) => a.name.localeCompare(b.name));
  }

  else {
    this.cars = [...this.originalCars];
  }
}
}