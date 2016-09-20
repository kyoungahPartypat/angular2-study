"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var video_service_1 = require('../service/video.service');
var VideoInputComponent = (function () {
    function VideoInputComponent(videoService) {
        this.videoService = videoService;
        this.mode = 'Promise';
        this.inputList = video_service_1.VideoService.getLists();
    }
    VideoInputComponent.prototype.addVideos = function (member, title, url) {
        this.videoService.addVideos(member, title, url).then(function (res) { return console.log(res.result); }, function (error) { return console.log(error); });
    };
    VideoInputComponent = __decorate([
        core_1.Component({
            selector: 'video-input',
            styles: ["\n      div.video-input > select{width: 100px; height:30px}\n\n      div.video-input > input{width:120px; height:25px; font-size:13px}\n      div.video-input > button{width:120px; height:30px; font-size:13px; background-color:#FFF; border:1px solid #42d8cd}\n    "],
            providers: [video_service_1.VideoService],
            template: "\n    <div  class=\"video-input\">\n      <select #member>\n        <option *ngFor=\"let name of inputList\" [value] =\"name\">{{name}}</option>\n      </select>\n\n      <input type=\"text\" #title placeholder=\"title\"/>\n      <input type=\"text\" #url placeholder=\"url\"/>\n      <button type=\"submit\" (click)=\"addVideos(member.value, title.value, url.value)\">\uD655\uC778</button>\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], VideoInputComponent);
    return VideoInputComponent;
}());
exports.VideoInputComponent = VideoInputComponent;
//# sourceMappingURL=video-input.component.js.map