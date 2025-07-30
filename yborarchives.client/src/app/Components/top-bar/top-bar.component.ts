import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Searchbar } from '../SearchBar/Searchbar';


@Component({
  selector: 'top-bar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  imports: [RouterLink, RouterOutlet, Searchbar]
})
export class TopBarComponent {
  new = "new";

}
