import { Component, model } from '@angular/core';
import { Searchbar } from '../SearchBar/Searchbar';


@Component({
  selector: 'top-bar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  imports: [Searchbar],
})
export class TopBarComponent {
  new = "new";
  searchBarValue = model("");
}
