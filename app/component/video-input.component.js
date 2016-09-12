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
    function VideoInputComponent() {
        this.inputList = video_service_1.VideoService.getLists();
    }
    VideoInputComponent.prototype.textNormalization = function () {
        console.log('hi');
    };
    VideoInputComponent = __decorate([
        core_1.Component({
            selector: 'video-input',
            styles: ["\n\n    "],
            template: "\n    <div  class=\"video-input\">\n      <select>\n        <option *ngFor=\"let name of inputList\" [value] =\"name\">{{name}}</option>\n      </select>\n      <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n        <input type=\"text\" #name placeholder=\"title\"/>\n        <input type=\"text\" #url placeholder=\"url\"/>\n        <button type=\"submit\" (click)=\"textNormalization()\">\uD655\uC778</button>\n      </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], VideoInputComponent);
    return VideoInputComponent;
}());
exports.VideoInputComponent = VideoInputComponent;
//# sourceMappingURL=video-input.component.js.map