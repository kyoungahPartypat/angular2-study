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
var platform_browser_1 = require('@angular/platform-browser');
var TwiceYoutube_1 = require('../model/TwiceYoutube');
var VideoDetailComponent = (function () {
    function VideoDetailComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    VideoDetailComponent.prototype.updateVideoUrl = function (id) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/" + id);
        return this.url;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', TwiceYoutube_1.TwiceYoutube)
    ], VideoDetailComponent.prototype, "video", void 0);
    VideoDetailComponent = __decorate([
        core_1.Component({
            selector: 'video-detail',
            styles: ["\n      div.show-video{width:400px; height:350px; margin-left:auto; margin-right:auto; position:relative;}\n      div.show-video > iframe{border:1px solid #42d8cd; position:absolute; bottom:0}\n    "],
            template: "\n    <div class=\"show-video\" *ngIf=\"video\">\n      <h3>{{video.title}}</h3>\n      <iframe width = \"100%\" height = \"300px\" [src]=\"updateVideoUrl(video.id)\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());
exports.VideoDetailComponent = VideoDetailComponent;
//# sourceMappingURL=video-detail.component.js.map