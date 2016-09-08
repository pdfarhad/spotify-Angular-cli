import { Component } from '@angular/core';

import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';

import {RouterModule, Routes} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'app works!';
  query :string;
}
