import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <input type="text" #name placeholder="title"/>
        <input type="text" #url placeholder="url"/>
        <button type="submit" (click)="textNormalization()">확인</button>
      </form>
    </div>
  `
})

export class VideoInputComponent {
  inputList: string[];

  constructor() {
    this.inputList = VideoService.getLists();
  }

  textNormalization(): void {
    console.log('hi');
  }
}
