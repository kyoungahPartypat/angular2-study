import { Component, Input } from '@angular/core';
import { DomSanitizationService, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { TwiceYoutube } from '../model/TwiceYoutube';

@Component({
  selector: 'video-detail',
  styles: [`
      div.show-video{width:400px; height:350px; margin-left:auto; margin-right:auto; position:relative;}
      div.show-video > iframe{border:1px solid #42d8cd; position:absolute; bottom:0}
    `],
  template: `
    <div class="show-video" *ngIf="video">
      <h3>{{video.title}}</h3>
      <iframe width = "100%" height = "300px" [src]="updateVideoUrl(video.id)" frameborder="0" allowfullscreen></iframe>
    </div>
  `
})


export class VideoDetailComponent {
  @Input()
  video: TwiceYoutube;
  dangerousUrl: string;
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizationService) {}

  updateVideoUrl(id: string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/" + id);

    return this.url;
  }

}
