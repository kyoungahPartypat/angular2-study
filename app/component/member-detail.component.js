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
var Twice_1 = require('../model/Twice');
var MemberDetailComponent = (function () {
    function MemberDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Twice_1.Twice)
    ], MemberDetailComponent.prototype, "member", void 0);
    MemberDetailComponent = __decorate([
        core_1.Component({
            selector: 'member-detail',
            styles: ["\n    div.detail{width:300px; float:left; margin-left:30px; text-align:center}\n    div.detail span{font-size:16px; color:#bdbfc3}\n\n    div.detail > strong{font-size:20px; color:#bdbfc3}\n\n    div.detail > img{width:100%; height:auto; margin-top:5px; margin-bottom:10px; border:2px solid #42d8cd}\n\n    div.detail > span.member-nick > input{height:25px; padding-left:10px; color:#bdbfc3; border:1px solid #bdbfc3; border-radius:5px}\n  "],
            template: "\n    <div class=\"detail\" *ngIf=\"member\">\n      <strong>{{member.name}}</strong>\n      <span class=\"member-age\">({{member.age}}\uC138)</span>\n      <img src={{member.image}}/>\n      <span class=\"member-nick\">\uBCC4\uBA85: <input [(ngModel)]=\"member.nick\" placeholder=\"name\"/></span>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());
exports.MemberDetailComponent = MemberDetailComponent;
//# sourceMappingURL=member-detail.component.js.map