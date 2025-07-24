import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Searchbar } from './Components/SearchBar/Searchbar'
import { ArtifactPreviewComponent } from './Components/artifact-preview/artifact-preview';
import "tailwindcss";

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [Searchbar, ArtifactPreviewComponent]
})
export class MainAppComponent implements OnInit {


  ngOnInit() {
    ;
  }

 
  title = 'yborarchives.client';
}
