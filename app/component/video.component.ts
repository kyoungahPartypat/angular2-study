import { Component, OnInit } from '@angular/core';

import { TwiceYoutube } from '../model/TwiceYoutube';
import { List, VideoService } from '../service/video.service';

@Component({
  selector: 'twice-video',
  providers: [VideoService],
  template: `
    <div id = "video">
      <video-detail [video]="selectedVideo"></video-detail>
      <ul class="members">
        <li *ngFor="let member of List">
          <button>{{member}}</button>
        </li>
      </ul>
    </div>
  `
})

export class VideoComponent implements OnInit{
  video: TwiceYoutube[];
  selectedVideo: TwiceYoutube;

  constructor(private videoService: VideoService) { }

  getVideos(): void {
    this.videoService.getVideos().then(video => this.video = video);
  }

  onSelect(video: TwiceYoutube): void {
    this.selectedVideo = video;
  }

  ngOnInit(): void {
    this.getVideos();
  }
}
