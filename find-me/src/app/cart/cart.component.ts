import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../service/commerce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public addedCartItems;
  public totalAmount = 0;

  constructor(private commerceService: CommerceService, private router: Router) { }

  ngOnInit() {

    this.commerceService.navItem$.subscribe( item => {
      this.addedCartItems = item;
    });

    this.addedCartItems.forEach( item => {
      this.totalAmount = this.totalAmount + (item['productPrice'] * item['availableQuantity']);
    });
  }

  public onValueChange(data, item) {
    console.log(data.target.value);
    let totalAmount = this.totalAmount;
    totalAmount = totalAmount + ( item['productPrice'] * (data.target.value - 1) );
    this.totalAmount = totalAmount;
  }

  public checkout() {
    alert('You have successfully placed your order !!');
    this.router.navigate(['']);
  }
}
