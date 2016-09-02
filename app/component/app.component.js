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
var TWICE = [
    { id: 1, name: '나연', age: 22, nick: "나부기", image: "../public/image/naYeon.jpg" },
    { id: 2, name: '정연', age: 21, nick: "유또막", image: "../public/image/jeongYeon.jpg" },
    { id: 3, name: '지효', age: 20, nick: "갓지효", image: "../public/image/juHyo.jpg" },
    { id: 4, name: '다현', age: 19, nick: "두부", image: "../public/image/daHyun.jpg" },
    { id: 5, name: '채영', age: 18, nick: "챙", image: "../public/image/chaeYoung.jpg" },
    { id: 6, name: '모모', age: 21, nick: "모모링", image: "../public/image/momo.jpg" },
    { id: 7, name: '사나', age: 21, nick: "사또떨", image: "../public/image/sana.jpg" },
    { id: 8, name: '미나', age: 20, nick: "정남이", image: "../public/image/mina.jpg" },
    { id: 9, name: '쯔위', age: 18, nick: "요다", image: "../public/image/tzuYu.jpg" }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "ONE IN A MILLION! TWICE!";
        this.twice = TWICE;
    }
    AppComponent.prototype.onSelect = function (member) {
        this.selectedMember = member;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'twice',
            styles: ["\n      h1{text-align:center; margin-top:10px; margin-bottom:30px; color:#42d8cd}\n\n      #content{width:450px; margin-left:auto; margin-right:auto}\n      #content:after{content:\" \"; display:block; clear:both}\n\n      #content > ul.members{width:120px; float:left}\n      #content > ul.members > li{width:100%; margin-bottom:10px; line-height:22px}\n      #content > ul.members > li span{display:inline-block}\n      #content > ul.members > li > span{width:100%; height:35px; border-radius:20px; border:1px solid #42d8cd}\n      #content > ul.members > li > span:hover{border:1px solid #cacaca; background-color:#cacaca; color:#FFF}\n      #content > ul.members > li > span > span.member-number{width:30px; height:30px; margin-top:3px; margin-left:5px; margin-right:5px; line-height:30px; text-align:center; font-size:13px; color:#FFF; border-radius:100%; background-color:#42d8cd}\n\n      #content > ul.members > li > span.selected{border:1px solid #cacaca; background-color:#cacaca; color:#FFF}\n      #content > ul.members > li > span.selected > span.member-number{color:#cacaca; background-color:#FFF}\n    "],
            template: "\n      <h1>{{title}}</h1>\n      <div id=\"content\">\n        <ul class=\"members\">\n          <li *ngFor=\"let member of twice\" (click)=\"onSelect(member)\">\n            <span [class.selected]=\"member === selectedMember\"><span class=\"member-number\">{{member.id}}</span> {{member.name}}</span>\n          </li>\n        </ul>\n        <member-detail [member]=\"selectedMember\"></member-detail>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map