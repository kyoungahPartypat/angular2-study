import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { VideoService } from '../service/video.service';

@Component({
  selector: 'video-input',
  styles: [`

    `],
  providers: [VideoService],
  template: `
    <div  class="video-input">
      <select #member>
        <option *ngFor="let name of inputList" [value] ="name">{{name}}</option>
      </select>

      <input type="text" #title placeholder="title"/>
      <input type="text" #url placeholder="url"/>
      <button type="submit" (click)="addVideos(member.value, title.value, url.value)">확인</button>

    </div>
  `
})

export class VideoInputComponent {
  inputList: string[];
  mode = 'Promise';

  constructor(private videoService: VideoService) {
    this.inputList = VideoService.getLists();
  }

  textNormalization(): void {
    console.log('hi');
  }

  addVideos (member: string, title:string, url:string) {
    this.videoService.addVideos(member, title, url).then(result => console.log(result), error => console.log(error));
  }

}
