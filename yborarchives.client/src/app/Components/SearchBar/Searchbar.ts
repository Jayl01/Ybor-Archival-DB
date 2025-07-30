import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
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

  firstName = input<string>();

  @Output() searchEmitter = new EventEmitter<string>();
  searchName: string = "";


  constructor() {}

  ngOnInit(): void {
      //throw new Error('Method not implemented.');
  }

  getArtifacts(): void {
      
  }

  formChange(event: Event): void {
    if (event == null || event.target == null)
      return;

    const target = event.target as HTMLTextAreaElement;
    this.searchName = target.value;
    //Call async search operation
  }

  onSubmit(value: string): void {
    this.searchName = value;
    this.searchEmitter.emit(value);
  }

  title = 'searchbar';
}
