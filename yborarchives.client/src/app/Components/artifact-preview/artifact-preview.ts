import { Component } from '@angular/core';
import { Artifact } from "../../types";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'artifact-preview',
  standalone: true,
  templateUrl: './artifact-preview.html',
  styleUrl: './artifact-preview.css',
  imports: [],

})
export class ArtifactPreviewComponent {
// this is just a temporary example. will be replaced by api call 
    data : Artifact = {
    "accession": "1",
    "title": "jayson's semi-masterpiece",
    "description": "not that good, but it's the effort that matters",
    "subject": ["I do not know what this is"],
    "location": "box 3",
    "date": "12/2/2026",
    "createdBy": "jayson",
    "size": "big",
    "condition": "big",
    "status": "meh",
    "donatedBy": "j-man",
    "image_links": [
      "https://cdn.discordapp.com/attachments/1374203665635741839/1397078992745529364/AnotherGuy.png?ex=68830db4&is=6881bc34&hm=a5bb306abec2ec8c5cde128b01c760e0802a2156c3a95eae24dfb18225092350&",
     "https://cdn.discordapp.com/attachments/1374203665635741839/1397079017701773364/AnotherGuy_Cookies.png?ex=68830dba&is=6881bc3a&hm=9b26b203a67a58d2a2a46305c97a334cc2d31f4790f04add1605841cda97281b&"
    ],
    "pdf_links": ["https://www.fsa.usda.gov/Internet/FSA_File/tech_assist.pdf", "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"],
    "personal_notes": "nothing to get too hyped about"

  };
}
