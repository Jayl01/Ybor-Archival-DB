import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, input, model, OnInit, output, Output } from '@angular/core';
import "tailwindcss";
import { Artifact } from "../../types";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'searchbar',
  templateUrl: './Searchbar.html',    //can also be straight html
  standalone: true,
  styleUrl: './Searchbar.css',
  imports: [CommonModule],
})

export class Searchbar implements OnInit {
  searchName = model("");   //models are inputs and outputs. You can get values by doing searchName() and you can get this value in parents by assigning this function to getter functions in parents.
  //onSearchNameChanged = output<any>();

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
    this.searchName.update(() => target.value);
    //this.onSearchNameChanged.emit(this.searchName);
    //this.searchEmitter.emit(this.searchName);
    //Call async search operation
  }

  onSubmit(value: string): void {
    this.searchName.update(() => value);
    //this.onSearchNameChanged.emit(this.searchName);
  }

  title = 'searchbar';
}
