import { Component, inject } from '@angular/core';
import { Artifact } from "../../types";
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Bridge } from '../../bridge';

@Component({
  selector: 'artifact-preview',
  standalone: true,
  templateUrl: './artifact-preview.html',
  styleUrl: './artifact-preview.css',
  imports: [],

})

export class ArtifactPreviewComponent {

  accession: string = "0";
  bridge = new Bridge().data
  artifact: Artifact = this.bridge.get(this.accession);

  route: ActivatedRoute = inject(ActivatedRoute);
  constructor() {
    this.accession = this.route.snapshot.params["accession"];
    this.artifact = this.bridge.get(this.accession)
  }

}
