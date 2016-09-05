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
var TwiceYoutube_1 = require('../model/TwiceYoutube');
var VideoDetailComponent = (function () {
    function VideoDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', TwiceYoutube_1.TwiceYoutube)
    ], VideoDetailComponent.prototype, "video", void 0);
    VideoDetailComponent = __decorate([
        core_1.Component({
            selector: 'video-detail',
            template: "\n    <div *ngIf=\"video\">\n      <iframe width = \"100%\" height = \"100%\" src=\"{{video.src}}\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());
exports.VideoDetailComponent = VideoDetailComponent;
//# sourceMappingURL=video-detail.component.js.map