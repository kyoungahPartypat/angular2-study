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
var twice_service_1 = require('../service/twice.service');
var MemberComponent = (function () {
    function MemberComponent(twiceService) {
        this.twiceService = twiceService;
    }
    MemberComponent.prototype.getMembers = function () {
        var _this = this;
        this.twiceService.getMembers().then(function (twice) { return _this.twice = twice; });
    };
    MemberComponent.prototype.onSelect = function (member) {
        this.selectedMember = member;
    };
    MemberComponent.prototype.ngOnInit = function () {
        this.getMembers();
    };
    MemberComponent = __decorate([
        core_1.Component({
            selector: 'twice-member',
            styles: ["\n      #content{width:450px; margin-left:auto; margin-right:auto}\n      #content:after{content:\" \"; display:block; clear:both}\n\n      #content > ul.members{width:120px; float:left}\n      #content > ul.members > li{width:100%; margin-bottom:10px; line-height:22px}\n      #content > ul.members > li span{display:inline-block}\n      #content > ul.members > li > span{width:100%; height:35px; border-radius:20px; border:1px solid #42d8cd}\n      #content > ul.members > li > span:hover{border:1px solid #cacaca; background-color:#cacaca; color:#FFF}\n      #content > ul.members > li > span > span.member-number{width:30px; height:30px; margin-top:3px; margin-left:5px; margin-right:5px; line-height:30px; text-align:center; font-size:13px; color:#FFF; border-radius:100%; background-color:#42d8cd}\n\n      #content > ul.members > li > span.selected{border:1px solid #cacaca; background-color:#cacaca; color:#FFF}\n      #content > ul.members > li > span.selected > span.member-number{color:#cacaca; background-color:#FFF}\n    "],
            providers: [twice_service_1.TwiceService],
            template: "\n      <h1>{{title}}</h1>\n      <div id=\"content\">\n        <ul class=\"members\">\n          <li *ngFor=\"let member of twice\" (click)=\"onSelect(member)\">\n            <span [class.selected]=\"member === selectedMember\"><span class=\"member-number\">{{member.id}}</span> {{member.name}}</span>\n          </li>\n        </ul>\n        <member-detail [member]=\"selectedMember\"></member-detail>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [twice_service_1.TwiceService])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=member.component.js.map