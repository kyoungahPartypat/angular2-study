import { Component, Input } from '@angular/core';

import { TwiceYoutube } from '../model/TwiceYoutube';

@Component({
  selector: 'video-detail',
  template: `
    <div *ngIf="video">
      <iframe width = "100%" height = "100%" src="{{video.src}}" frameborder="0" allowfullscreen></iframe>
    </div>
  `
})


export class VideoDetailComponent {
  @Input()
  video: TwiceYoutube;
}
