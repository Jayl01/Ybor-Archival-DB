import { Component } from '@angular/core';
import { Artifact } from "../../types"
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'artifact-preview',
  standalone: true,
  templateUrl: './artifact-preview.html',
  styleUrl: './artifact-preview.css',
  imports: [
],
})
export class ArtifactPreviewComponent {
  public hello = "hello";
  data = {
    "accession": "1",
    "title": "jayson's semi-masterpiece",
    "description": "not that good, but it's the effort that matters",
    "subject": "I do not know what this is",
    "location": "box 3",
    "date": "12/2/2026",
    "created by": "jayson",
    "size": "big",
    "condition": "big",
    "status": "meh",
    "donated by": "j-man",
    "image": "https://cdn.discordapp.com/attachments/1374203665635741839/1397078992745529364/AnotherGuy.png?ex=68830db4&is=6881bc34&hm=a5bb306abec2ec8c5cde128b01c760e0802a2156c3a95eae24dfb18225092350&",
    "pdf": [],
    "notes": "nothing to get too hyped about"

  };
  image = this.data["image"]
}
