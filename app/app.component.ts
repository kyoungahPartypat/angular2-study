import { Component } from '@angular/core';

export class Twice {
  id: number;
  name: string;
  age: number;
  nick: string;
}

const TWICE: Twice[] = [
  {id: 1, name: '나연', age: 22, nick: "나부기"},
  {id: 2, name: '정연', age: 21, nick: "유또막"},
  {id: 3, name: '지효', age: 20, nick: "갓지효"},
  {id: 4, name: '다현', age: 19, nick: "두부"},
  {id: 5, name: '채영', age: 18, nick: "챙"},
  {id: 6, name: '모모', age: 21, nick: "모모링"},
  {id: 7, name: '사나', age: 21, nick: "사또떨"},
  {id: 8, name: '미나', age: 20, nick: "정남이"},
  {id: 9, name: '쯔위', age: 18, nick: "요다"}
];

@Component({
  selector: 'twice',
  styles: [`
      h1, h2{text-align:center}

      #content{width:150px; margin-left:auto; margin-right:auto}
      #content > ul.members{width:100%}
      #content > ul.members > li{margin-bottom:10px; line-height:22px}

    `],
  template: `
      <h1>{{title}}</h1>
      <h2>Twice!</h2>
      <div id="content">
        <ul class="members">
          <li *ngFor='let member of twice'>
            <span class="member-title">{{member.id}}. <span class={{member.name}}</span>
            <div>
              <span>나이: {{member.age}}</span>
              <br/>
              <span>별명: {{member.nick}}</span>
            </div>
          </li>
        </ul>
      </div>
  `
})

export class AppComponent {
  title = "ONE IN A MILLION!";
  twice = TWICE;
}
