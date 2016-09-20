import { Component, Input } from '@angular/core';
import { DomSanitizationService, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { TwiceYoutube } from '../model/TwiceYoutube';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'video-detail',
  providers: [VideoService],
  styles: [`
      div.show-video{width:400px; height:330px; margin-left:auto; margin-right:auto; position:relative;}
      div.show-video > h3{width:100%; text-align:center; font-size:15px; color:#bdbfc3}

      div.show-video > div.show-box{width:100%; height:300px; position:absolute; border:2px solid #42d8cd; background:url('../public/image/back.jpg') no-repeat; background-size:100% auto; bottom:0}
    `],
  template: `
    <div class="show-video">
      <h3>{{video ? video.title : 'Twice :D'}}</h3>
      <div class="show-box">
        <iframe  *ngIf="video" width = "100%" height = "100%" [src]="updateVideoUrl(video.url)" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  `
})


export class VideoDetailComponent {
  @Input()
  video: TwiceYoutube;
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizationService, private videoService: VideoService) {}

  updateVideoUrl(id: string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/" + id + "?&autoplay=1");

    return this.url;
  }

}
