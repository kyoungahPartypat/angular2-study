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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./component/app.component');
var member_component_1 = require('./component/member.component');
var member_detail_component_1 = require('./component/member-detail.component');
var video_component_1 = require('./component/video.component');
var video_detail_component_1 = require('./component/video-detail.component');
var video_input_component_1 = require('./component/video-input.component');
var twice_service_1 = require('./service/twice.service');
var video_service_1 = require('./service/video.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                member_component_1.MemberComponent,
                member_detail_component_1.MemberDetailComponent,
                video_component_1.VideoComponent,
                video_detail_component_1.VideoDetailComponent,
                video_input_component_1.VideoInputComponent
            ],
            providers: [
                twice_service_1.TwiceService,
                video_service_1.VideoService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map