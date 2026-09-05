import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { Favorites } from './favorites/favorites';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
{
    path: '',
    component: Home
},
{
    path: 'cars',
    component: Products
},
{
    path: 'cart',
    component: Cart
},
{
    path: 'favorites',
    component: Favorites
},
{
    path: 'login',
    component: Login
},
{
    path: 'register',
    component: Register
},
{
    path: '**',
    redirectTo: ''
}
];