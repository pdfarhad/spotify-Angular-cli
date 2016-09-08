// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-track',
//   templateUrl: 'track.component.html',
//   styleUrls: ['track.component.css']
// })
// export class TrackComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

/*
 * Services
 */
import {SpotifyService} from '../shared/spotify.service';


// angular2 doesn't like 'track' as the selector
// because apparently it's an existing HTML element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
@Component({
  selector: 'theTrack',
  templateUrl:'track.component.html'
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(public route: ActivatedRoute, public spotify: SpotifyService,
              public location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    this.location.back();
  }

  renderTrack(res: any): void {
    this.track = res;
  }
}
