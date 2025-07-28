import { Component, inject } from '@angular/core';
import { Artifact } from "../../types";
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Bridge } from '../../bridge';
import { RouterOutlet, RouterLink } from '@angular/router'

@Component({
  selector: 'artifact-preview',
  standalone: true,
  templateUrl: './artifact-preview.html',
  styleUrl: './artifact-preview.css',
  imports: [RouterOutlet, RouterLink],

})

export class ArtifactPreviewComponent {

  edit : boolean = false;

  editComponent(){
    this.edit=true;
  }
  
  accession: string = "0";
  bridge = new Bridge().data
  artifact: Artifact = this.bridge.get(this.accession);
  table = {
    "Accession":"Accession",
    "Description": "Description",
    "SubjectHeadings": "Subjects",
    "Location": "Location",
    "Date": "Date",
    "CreatedBy": "Created By",
    "Size": "Size",
    "Condition": "Condition",
    "Status": "Status",
    "DonatedBy": "Donated By",
    "PersonalNotes": "Notes"
  }
  tableKeys = Object.keys(this.table);
  tableValues = Object.values(this.table);
  


  route: ActivatedRoute = inject(ActivatedRoute);
  constructor() {
    this.accession = this.route.snapshot.params["accession"];
    this.artifact = this.bridge.get(this.accession);
  }

}
