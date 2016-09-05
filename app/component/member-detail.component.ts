import { Component, Input } from '@angular/core';

import { Twice } from '../model/Twice';

@Component({
  selector: 'member-detail',
  styles: [`
    div.detail{width:300px; float:left; margin-left:30px; text-align:center}
    div.detail span{font-size:16px; color:#bdbfc3}

    div.detail > strong{font-size:20px; color:#bdbfc3}

    div.detail > img{width:100%; height:auto; margin-top:5px; margin-bottom:10px; border:2px solid #42d8cd}

    div.detail > span.member-nick > input{height:25px; padding-left:10px; color:#bdbfc3; border:1px solid #bdbfc3; border-radius:5px}
  `],
  template: `
    <div class="detail" *ngIf="member">
      <strong>{{member.name}}</strong>
      <span class="member-age">({{member.age}}세)</span>
      <img src={{member.image}}/>
      <span class="member-nick">별명: <input [(ngModel)]="member.nick" placeholder="name"/></span>
    </div>
  `
})

export class MemberDetailComponent {
  @Input()
  member: Twice;
}
