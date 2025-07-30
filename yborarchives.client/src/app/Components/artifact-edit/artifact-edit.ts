import { Component, inject } from '@angular/core';
import { Artifact } from "../../types";
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../Data';
import { RouterOutlet, RouterLink } from '@angular/router'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'artifact-edit',
  standalone: true,
  templateUrl: './artifact-edit.html',
  styleUrl: './artifact-edit.css',
  imports: [RouterOutlet, RouterLink, FormsModule],

})

export class ArtifactEditComponent {
  saveComponent() {
    this.appData.updateArtifact(this.artifact);
  }

  accession: string = "0";
  appData = new Data();
  artifact: Artifact = this.appData.data[0];
  table = {
    "Accession": "Accession",
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
    if (this.accession != "new") {
      this.artifact = this.appData.data[0];
    }
    else {
      this.artifact = this.appData.getNewArticle()
    }
  }

}
