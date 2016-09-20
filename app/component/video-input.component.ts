import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { VideoService } from '../service/video.service';

@Component({
  selector: 'video-input',
  styles: [`
      div.video-input > select{width: 100px; height:30px}

      div.video-input > input{width:120px; height:25px; font-size:13px}
      div.video-input > button{width:120px; height:30px; font-size:13px; background-color:#FFF; border:1px solid #42d8cd}
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

  addVideos (member: string, title:string, url:string) {
    this.videoService.addVideos(member, title, url).then(res => console.log(res.result), error => console.log(error));
  }

}
