import { Component, OnInit } from '@angular/core';

import { TwiceYoutube } from '../model/TwiceYoutube';
import { List, VideoService } from '../service/video.service';

@Component({
  selector: 'twice-video',
  styles: [`
    #video{width:500px; margin-left:auto; margin-right:auto}

    #video > ul{width:100%; padding:5px}
    #video > ul:after{content:""; display:block; clear:both}
    #video > ul > li{width:100px; float:left; padding:5px; box-sizing:border-box}
    #video > ul > li > button{width:100%; height:30px}
    #video > ul.videos > li > button{border:1px solid #42d8cd; background-color:#FFF}
    #video > ul.members > li > button{background-color:42d8cd; color:#FFF; border:none}

    `],
  providers: [VideoService],
  template: `
    <div id = "video">
      <video-detail [video]="selectedVideo"></video-detail>
      <ul class = "videos">
        <li *ngFor="let video of subList">
          <button (click)="onSelect(video)">{{video.title}}</button>
        </li>
      </ul>
      <ul class="members">
        <li *ngFor="let member of list">
          <button (click)="onListSelect(member)">{{member}}</button>
        </li>
      </ul>
      <button (click)="onInsertVideo()">직접 입력하기</button>
      <video-input></video-input>
    </div>
  `
})

export class VideoComponent implements OnInit{
  subList: TwiceYoutube[];
  list: string[];
  video: TwiceYoutube[];
  selectedVideo: TwiceYoutube;
  isShowInputVideo: boolean;

  constructor(private videoService: VideoService) { }

  getVideos(): void {
    this.videoService.getVideos().then(video => this.video = video);
  }

  onListSelect(member) : void {
    this.subList = [];
    this.selectedVideo = null;

    this.video.map((item, i)=>{
      if(member === item.member){
        this.subList.push(item);
      }
    });
  }

  onSelect(video: TwiceYoutube): void {
    this.selectedVideo = video;
  }

  onInsertVideo(): void {
    this.isShowInputVideo = true;
  }

  ngOnInit(): void {
    this.list = List;
    this.getVideos();
  }
}
