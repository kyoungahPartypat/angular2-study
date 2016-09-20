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
var VideoComponent = (function () {
    function VideoComponent(videoService) {
        this.videoService = videoService;
    }
    VideoComponent.prototype.onListSelect = function (member) {
        var _this = this;
        this.subList = [];
        this.selectedVideo = null;
        this.videoService.getVideos(member).then(function (res) {
            return res.videos.map(function (item, i) {
                if (member === item.member) {
                    _this.subList.push(item);
                }
            });
        }, function (error) { return console.log(error); });
    };
    VideoComponent.prototype.onSelect = function (video) {
        this.selectedVideo = video;
    };
    VideoComponent.prototype.onInsertVideo = function () {
        this.isShowInputVideo = true;
    };
    VideoComponent.prototype.ngOnInit = function () {
        this.list = video_service_1.VideoService.getLists();
    };
    VideoComponent = __decorate([
        core_1.Component({
            selector: 'twice-video',
            styles: ["\n    #video{width:500px; margin-left:auto; margin-right:auto}\n\n    #video > ul{width:100%; padding:5px}\n    #video > ul:after{content:\"\"; display:block; clear:both}\n    #video > ul > li{width:100px; float:left; padding:5px; box-sizing:border-box}\n    #video > ul > li > button{width:100%; height:30px}\n    #video > ul.videos > li > button{border:1px solid #42d8cd; background-color:#FFF}\n    #video > ul.members > li > button{background-color:#42d8cd; color:#FFF; border:none}\n\n    "],
            providers: [video_service_1.VideoService],
            template: "\n    <div id = \"video\">\n      <video-detail [video]=\"selectedVideo\"></video-detail>\n      <ul class = \"videos\">\n        <li *ngFor=\"let video of subList\">\n          <button (click)=\"onSelect(video)\">{{video.title}}</button>\n        </li>\n      </ul>\n      <ul class=\"members\">\n        <li *ngFor=\"let member of list\">\n          <button (click)=\"onListSelect(member)\">{{member}}</button>\n        </li>\n      </ul>\n      <button (click)=\"onInsertVideo()\">\uC9C1\uC811 \uC785\uB825\uD558\uAE30</button>\n      <video-input></video-input>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], VideoComponent);
    return VideoComponent;
}());
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map