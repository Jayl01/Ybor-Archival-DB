import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import "tailwindcss";
import { Artifact } from "../../types";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'searchbar',
  templateUrl: './Searchbar.html',    //can also be straight html
  standalone: true,
  styleUrl: './Searchbar.css',
  imports: [CommonModule, FormsModule],
  //template:
})

export class Searchbar implements OnInit {

  public searchName: string = "";
  constructor(
  ) {}

  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

  getArtifacts(): void {
      
  }

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    //console.warn('Your order has been submitted', this.checkoutForm.value);
    //this.checkoutForm.reset();
    console.log(this.searchName);
  }

  title = 'searchbar';
}
