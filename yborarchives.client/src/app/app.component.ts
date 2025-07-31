import { HttpClient } from '@angular/common/http';
import { Component, model, OnInit } from '@angular/core';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { ManyPreviewComponent } from './Components/many-preview/many-preview'; 
import { HttpServices } from './http-services.service';
import "tailwindcss";
import { Data } from './Data';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ManyPreviewComponent, TopBarComponent]
})
export class MainAppComponent implements OnInit {
  data_temp : object = {};
  data = new Data().data;
  listedData = this.data;
  

  searchBarValue = model("");
  // async getA(){
  //   const data = await (await fetch("http://localhost:3000/artifact")).json();
  //   console.log(data);
  //   return await data ;

  // }

  constructor(){
    this.searchBarValue.subscribe(this.searchBarUpdated.bind(this));    //bind recontextualizes searchBarUpdated to perform under the this context.
  }
  

  ngOnInit() {
    // this.getArtifact()

    ;
  }

  searchBarUpdated(value: string): void {
    if (this == null || this.data == null)
      return;

    this.listedData = this.data.filter( (artifact) => {
      return artifact.Title.toLowerCase().includes(value.toLowerCase())
        || artifact.Description.toLowerCase().includes(value.toLowerCase())
        || artifact.CreatedBy.toLowerCase().includes(value.toLowerCase())
        || artifact.SubjectHeadings.toLowerCase().includes(value.toLowerCase())
        || artifact.Location.toLowerCase().includes(value.toLowerCase())
        || artifact.Size.toLowerCase().includes(value.toLowerCase())
        || artifact.DonatedBy.toLowerCase().includes(value.toLowerCase())
        || artifact.Accession.includes(value)
        || artifact.Condition.includes(value)
        || artifact.Status.includes(value)
        || artifact.Date.includes(value)
      }
    );
  }

  // a = this.getA();
  title = 'yborarchives.client';
  
}
