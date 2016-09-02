import { Component } from '@angular/core';

import { Twice } from './Twice';

const TWICE: Twice[] = [
  {id: 1, name: '나연', age: 22, nick: "나부기", image: "../public/image/naYeon.jpg"},
  {id: 2, name: '정연', age: 21, nick: "유또막", image: "../public/image/jeongYeon.jpg"},
  {id: 3, name: '지효', age: 20, nick: "갓지효", image: "../public/image/juHyo.jpg"},
  {id: 4, name: '다현', age: 19, nick: "두부", image: "../public/image/daHyun.jpg"},
  {id: 5, name: '채영', age: 18, nick: "챙", image: "../public/image/chaeYoung.jpg"},
  {id: 6, name: '모모', age: 21, nick: "모모링", image: "../public/image/momo.jpg"},
  {id: 7, name: '사나', age: 21, nick: "사또떨", image: "../public/image/sana.jpg"},
  {id: 8, name: '미나', age: 20, nick: "정남이", image: "../public/image/mina.jpg"},
  {id: 9, name: '쯔위', age: 18, nick: "요다", image: "../public/image/tzuYu.jpg"}
];

@Component({
  selector: 'twice',
  styles: [`
      h1{text-align:center; margin-top:10px; margin-bottom:30px; color:#42d8cd}

      #content{width:450px; margin-left:auto; margin-right:auto}
      #content:after{content:" "; display:block; clear:both}

      #content > ul.members{width:120px; float:left}
      #content > ul.members > li{width:100%; margin-bottom:10px; line-height:22px}
      #content > ul.members > li span{display:inline-block}
      #content > ul.members > li > span{width:100%; height:35px; border-radius:20px; border:1px solid #42d8cd}
      #content > ul.members > li > span:hover{border:1px solid #cacaca; background-color:#cacaca; color:#FFF}
      #content > ul.members > li > span > span.member-number{width:30px; height:30px; margin-top:3px; margin-left:5px; margin-right:5px; line-height:30px; text-align:center; font-size:13px; color:#FFF; border-radius:100%; background-color:#42d8cd}

      #content > ul.members > li > span.selected{border:1px solid #cacaca; background-color:#cacaca; color:#FFF}
      #content > ul.members > li > span.selected > span.member-number{color:#cacaca; background-color:#FFF}
    `],
  template: `
      <h1>{{title}}</h1>
      <div id="content">
        <ul class="members">
          <li *ngFor="let member of twice" (click)="onSelect(member)">
            <span [class.selected]="member === selectedMember"><span class="member-number">{{member.id}}</span> {{member.name}}</span>
          </li>
        </ul>
        <member-detail [member]="selectedMember"></member-detail>
      </div>
  `
})

export class AppComponent {
  title = "ONE IN A MILLION! TWICE!";
  twice = TWICE;
  selectedMember: Twice;

  onSelect(member: Twice): void {
    this.selectedMember = member;
  }
}
