import { Component } from '@angular/core';
import { Artifact } from "../../types";
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Bridge } from '../../bridge'; 


@Component({
  selector: 'many-preview',
  standalone: true,
  templateUrl: './many-preview.html',
  styleUrl: './many-preview.css',
  imports: [RouterLink,  RouterOutlet],

})

export class ManyPreviewComponent {
  // this is just a temporary example. will be replaced by api call 
  data_temp : object = {};

  data = new Bridge().data;
  list_of_keys = Array.from(this.data.keys());
  constructor() {
  }
}
