import { Component, model } from '@angular/core';
import { Artifact } from "../../types";
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Data } from '../../Data'; 


@Component({
  selector: 'many-preview',
  standalone: true,
  templateUrl: './many-preview.html',
  styleUrl: './many-preview.css',
  imports: [RouterLink,  RouterOutlet],

})

export class ManyPreviewComponent {
  inputData = model.required<Artifact[]>();

  constructor() {
  }
}
