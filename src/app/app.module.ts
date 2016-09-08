import {Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic}from '@angular/platform-browser-dynamic';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule}from '@angular/http';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import {SPOTIFY_PROVIDERS} from './shared/spotify.service';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
];


@NgModule({
  declarations: [
    // AppComponent
    AppComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SPOTIFY_PROVIDERS,
    { provide: APP_BASE_HREF, userValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
