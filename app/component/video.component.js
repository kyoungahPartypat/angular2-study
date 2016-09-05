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
    VideoComponent.prototype.getVideos = function () {
        var _this = this;
        this.videoService.getVideos().then(function (video) { return _this.video = video; });
    };
    VideoComponent.prototype.onSelect = function (video) {
        this.selectedVideo = video;
    };
    VideoComponent.prototype.ngOnInit = function () {
        this.getVideos();
    };
    VideoComponent = __decorate([
        core_1.Component({
            selector: 'twice-video',
            providers: [video_service_1.VideoService],
            template: "\n    <div id = \"video\">\n      <video-detail [video]=\"selectedVideo\"></video-detail>\n      <ul class=\"members\">\n        <li *ngFor=\"let member of List\">\n          <button>{{member}}</button>\n        </li>\n      </ul>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], VideoComponent);
    return VideoComponent;
}());
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map