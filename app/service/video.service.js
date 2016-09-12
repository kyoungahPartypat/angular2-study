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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var mock_youtube_1 = require('../model/mock-youtube');
var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
        this.url = "http://sigyeiswatch.com/twice/upload";
    }
    VideoService.getLists = function () {
        return ['단체', '나연', '정연', '지효', '다현', '채영', '모모', '사나', '미나', '쯔위'];
    };
    ;
    VideoService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    VideoService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    VideoService.prototype.getVideos = function () {
        return Promise.resolve(mock_youtube_1.YOUTUBE);
    };
    ;
    VideoService.prototype.addVideos = function (name, title, url) {
        var body = JSON.stringify({ name: name, title: title, url: url });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options).toPromise().then(this.extractData).catch(this.handleError);
    };
    ;
    VideoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map