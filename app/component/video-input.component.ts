import { Component } from '@angular/core';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'video-input',
  styles: [`

    `],
  template: `
    <div  class="video-input">
      <select>
        <option *ngFor="let name of inputList" [value] ="name">{{name}}</option>
      </select>
      <input type="text" />
      <button>확인</button>
    </div>
  `
})

export class VideoInputComponent {
  inputList: string[];

  constructor() {
    this.inputList = VideoService.getLists();
  }
}
