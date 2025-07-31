import { Component, inject } from '@angular/core';
import { Artifact } from "../../types";
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../Data';
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

  artifactHasImages = false;
  activeImageLink = "";
  activeImageIndex = 0;
  accession: string = "0";
  appData = new Data().data;
  artifact: Artifact;

  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {   //later on, this needs to be optimized because we make a clone of all data here which is bad for power optimization
    this.accession = this.route.snapshot.params["accession"];
    this.artifact = this.appData.filter((artifact) => artifact.Accession == this.accession)[0];
    this.artifactHasImages = this.artifact.Images ? this.artifact.Images.length > 0 : false;
    this.activeImageLink = this.artifact.Images ? this.artifact.Images[0] : "";
  }

  previousImgPressed(): void {
    if (this.activeImageIndex > 0)
      this.activeImageIndex -= 1;
    else
      this.activeImageIndex = this.artifact.Images.length - 1;

    this.activeImageLink = this.artifact.Images[this.activeImageIndex];
  }

  nextImgPressed(): void {
    if (this.activeImageIndex < this.artifact.Images.length - 1)
      this.activeImageIndex += 1;
    else
      this.activeImageIndex = 0;

    this.activeImageLink = this.artifact.Images[this.activeImageIndex];
  }
}
