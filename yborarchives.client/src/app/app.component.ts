import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { ManyPreviewComponent } from './Components/many-preview/many-preview'; 
import { HttpServices } from './http-services.service';
import "tailwindcss";


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ManyPreviewComponent, TopBarComponent ]
})
export class MainAppComponent implements OnInit {

  // async getA(){
  //   const data = await (await fetch("http://localhost:3000/artifact")).json();
  //   console.log(data);
  //   return await data ;

  // }
  

  ngOnInit() {
    // this.getArtifact()

    ;
  }


  // a = this.getA();
  title = 'yborarchives.client';
  
}
