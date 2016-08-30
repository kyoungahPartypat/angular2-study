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
var Twice = (function () {
    function Twice() {
    }
    return Twice;
}());
exports.Twice = Twice;
var TWICE = [
    { id: 1, name: '나연', age: 22, nick: "나부기" },
    { id: 2, name: '정연', age: 21, nick: "유또막" },
    { id: 3, name: '지효', age: 20, nick: "갓지효" },
    { id: 4, name: '다현', age: 19, nick: "두부" },
    { id: 5, name: '채영', age: 18, nick: "챙" },
    { id: 6, name: '모모', age: 21, nick: "모모링" },
    { id: 7, name: '사나', age: 21, nick: "사또떨" },
    { id: 8, name: '미나', age: 20, nick: "정남이" },
    { id: 9, name: '쯔위', age: 18, nick: "요다" }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "ONE IN A MILLION!";
        this.twice = TWICE;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'twice',
            styles: ["\n      h1, h2{text-align:center}\n\n      #content{width:150px; margin-left:auto; margin-right:auto}\n      #content > ul.members{width:100%}\n      #content > ul.members > li{margin-bottom:10px; line-height:22px}\n\n    "],
            template: "\n      <h1>{{title}}</h1>\n      <h2>Twice!</h2>\n      <div id=\"content\">\n        <ul class=\"members\">\n          <li *ngFor='let member of twice'>\n            <span class=\"member-title\">{{member.id}}. <span class={{member.name}}</span>\n            <div>\n              <span>\uB098\uC774: {{member.age}}</span>\n              <br/>\n              <span>\uBCC4\uBA85: {{member.nick}}</span>\n            </div>\n          </li>\n        </ul>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map