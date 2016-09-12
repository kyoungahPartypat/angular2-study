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
require('../rxjs-operators');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "ONE IN A MILLION! TWICE!";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'twice',
            styles: ["\n      h1{text-align:center; margin-top:10px; margin-bottom:30px; color:#42d8cd}\n\n      nav{width:150px; margin-left:auto; margin-right:auto; margin-bottom:20px}\n      nav:after{content:\" \"; display:block; clear:both}\n      nav > a{display:block; float:left; width:50%; color:#42d8cd; text-align:center; text-decoration:none}\n\n  "],
            template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a routerLink = \"/members\">Members</a>\n      <a routerLink = \"/video\">Video</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map